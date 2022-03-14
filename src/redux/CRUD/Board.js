import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete, boardSelected, boardUnSelected } from "./action";
import { unsetRevise } from "./revise/action";
import { setOutAdmin } from "redux/setAdmin/actions";

import styles from "./Board.module.css";
import tableStyle from "../../pages/notice/Notice.module.css";
import List from "./List";
import BoardNew from "./BoardNew";

const Board = () => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
        sort: '',
        writer: '',
        postDate: ''
    });

    const dispatch = useDispatch();

    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    const onDelete = (postId) => {
        if(window.confirm("영구히 삭제합니다. 정말 삭제하시겠습니까?")===true){
            alert("삭제되었습니다.");
            dispatch(boardDelete(postId))};
        }
    const onSave = (dataToSave) => {
        if(window.confirm("저장하시겠습니까?")===true){
            alert("저장되었습니다.");
            dispatch(boardSave(dataToSave));
            offWriteMode();
            window.scrollTo(0, 0);
        }
    }

    const {selected} = useSelector(state => state.board);

    
    const postClickHandler = (postId) => 
    {
        dispatch(boardSelected(postId));
        
        if(JSON.stringify(selected) !== '{}') {
            setPost({
                id: selected.id,
                title: selected.title,
                content: selected.content,
                sort: selected.sort,
                writer: selected.writer,
                postDate: selected.postDate
            });
        }
    }
    
    const changeInput = (e) => {
            setPost({
                ...post,
                [e.target.name]: e.target.value,
            })
    }
    
    const resetForm = () => {
        setPost({
            id: '',
            title: '',
            content: '',
            sort: '',
            writer: '',
            postDate: ''
        })
        dispatch(boardUnSelected());
    }
    
    const {boards} = useSelector(state => state.board);

    //Detect reviseState
    const {reviseState} = useSelector(state => state.revise);
    const offRevise = () => {
        dispatch(unsetRevise());
    }

    //writeMode State
    const [writeMode, setWriteMode] = useState(false);

    const onWriteMode = () =>{
        dispatch(boardUnSelected());
        setWriteMode(true);
    }

    const offWriteMode = () =>{
        if(reviseState === true){
            offRevise();
        }
        setWriteMode(false);
    }

    const setContent = (contentRaw) => {
        setPost({
            ...post,
            content: contentRaw,
        })
    }

    const offAdmin = () =>{
        dispatch(setOutAdmin());
    }

    return(
        <div id={writeMode? styles.containerSlideUp:styles.containerSlideDown}>
            <div className={styles.sortSelection}
                 hidden={(writeMode||reviseState)}>
                전체(2)&nbsp; 카테고리(1)&nbsp; shop(1)
            </div>
            <table className={tableStyle.notice_table}
                   hidden={(writeMode||reviseState)}
                   border="0">
                <thead>
                    <tr id={tableStyle.notice_th}
                        className={tableStyle.notice_table}>
                        <th hidden={!adminState}>No.</th>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th hidden={!adminState}></th>
                    </tr>
                </thead>
                <tbody>
        {/* 지금은 boards지만 */}
                        {boards.map(post =>
                            (
                                <List
                                    no={(boards.indexOf(post))+1}
                                    tableStyle={tableStyle}
                                    post={post}
                                    postClickHandler={postClickHandler}
                                    onDelete={onDelete}
                                />
                            ))
                        }
                </tbody>

            </table>

            <div className={(adminState)&&!(writeMode||reviseState)? styles.editorElements:tableStyle.backToNoticeButton_positon}>
                <button hidden={!((adminState)&&!(writeMode||reviseState))}
                        onClick={offAdmin}>
                    관리자 로그아웃
                </button>

                <Link to={adminState? '/Notice':'/LogIn'}>
                    <button className={tableStyle.noticeButton}
                    onClick={(writeMode||reviseState)? offWriteMode : onWriteMode}>
                    {(writeMode||reviseState)? '게시판으로 가기':'글쓰기'}</button>
                </Link>
            </div>

            <div hidden={!(writeMode||reviseState)}>
                <BoardNew
                    onSave={onSave}
                    changeInput={changeInput}
                    post={post}
                    resetForm={resetForm}
                    setContent={setContent}
                    setPost={setPost}
                />
            </div>
        </div>
    );
};

export default Board;