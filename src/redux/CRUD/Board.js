import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete } from "./action";
import { unsetRevise } from "./revise/action";
import { setOutAdmin } from "redux/setAdmin/actions";
import axios from "axios";

import styles from "./Board.module.css";
import tableStyle from "../../pages/notice/Notice.module.css";
import List from "./List";
import BoardNew from "./BoardNew";

const Board = () => {
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        sort: "",
        writer: "",
    });

    const dispatch = useDispatch();

    //Detect AdminMode
    const { adminState } = useSelector((state) => state.adminMode);

    const onDelete = (e, postId) => {
        e.stopPropagation();
        if (window.confirm("영구히 삭제합니다. 정말 삭제하시겠습니까?") === true) {
            dispatch(boardDelete(postId));
            window.scrollTo(0, 0);
        }
    };

    const onSave = (dataToSave) => {
        if (window.confirm("저장하시겠습니까?") === true) {
            dispatch(boardSave(dataToSave));

            if (reviseState === true) {
                offRevise();
            }
            setWriteMode(false);
            resetForm();
        }
    };

    const changeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setPost({
            id: "",
            title: "",
            content: "",
            sort: "",
            writer: "",
        });
    };

    //Detect reviseState
    const { reviseState } = useSelector((state) => state.revise);
    const offRevise = () => {
        dispatch(unsetRevise());
    };

    //writeMode State
    const [writeMode, setWriteMode] = useState(false);
    const onWriteMode = () => {
        setWriteMode(true);
        window.scrollTo(0, 0);
    };
    const offWriteMode = () => {
        if (window.confirm("게시물 작성이 취소됩니다. 게시판으로 돌아가시겠습니까?") === true) {
            setWriteMode(false);
            if (reviseState === true) {
                offRevise();
                alert("게시물 수정이 취소되었습니다.");
            } else {
                alert("게시물 작성이 취소되었습니다.");
            }
            resetForm();
            window.scrollTo(0, 0);
        }
    };

    const setContent = (contentRaw) => {
        setPost({
            ...post,
            content: contentRaw,
        });
    };

    const offAdmin = () => {
        dispatch(setOutAdmin());
    };

    const [board, setBoard] = useState([]);
    const getPostList = async () => {
        try {
            const getPostData = await axios.get("/api/v1/post");
            setBoard(getPostData.data.content);
        } catch (error) {
            alert(error.response.data);
        }
    };
    useEffect(() => {
        getPostList();
    }, [board]);

    return (
        <div id={writeMode ? styles.containerSlideUp : styles.containerSlideDown}>
            <div
                className={styles.sortSelection}
                style={{ display: writeMode || reviseState ? "none" : "" }}
            >
                <div>전체(2)</div>
                <div>카테고리(1)</div>
                <div>shop(1)</div>
            </div>
            <table className={tableStyle.notice_table} hidden={writeMode || reviseState} border="0">
                <thead>
                    <tr id={tableStyle.notice_th} className={tableStyle.notice_table}>
                        <th hidden={!adminState}>No.</th>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th hidden={!adminState}></th>
                    </tr>
                </thead>
                <tbody>
                    {board.map((post) => (
                        <List
                            no={board.indexOf(post) + 1}
                            tableStyle={tableStyle}
                            post={post}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>

            <div
                className={
                    adminState && !(writeMode || reviseState)
                        ? styles.editorElements
                        : tableStyle.backToNoticeButton_positon
                }
            >
                <button hidden={!(adminState && !(writeMode || reviseState))} onClick={offAdmin}>
                    관리자 로그아웃
                </button>

                <Link to={adminState ? "/Notice" : "/LogIn"}>
                    <button
                        className={tableStyle.noticeButton}
                        onClick={writeMode || reviseState ? offWriteMode : onWriteMode}
                    >
                        {writeMode || reviseState ? "게시판으로 가기" : "글쓰기"}
                    </button>
                </Link>
            </div>

            <div hidden={!(writeMode || reviseState)}>
                <BoardNew
                    onSave={onSave}
                    changeInput={changeInput}
                    post={post}
                    setContent={setContent}
                    writeMode={writeMode}
                />
            </div>
        </div>
    );
};

export default Board;
