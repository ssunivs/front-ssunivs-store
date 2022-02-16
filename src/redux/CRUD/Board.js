import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete, boardSelected, boardUnSelected } from "./action";
import { unsetRevise } from "./revise/action";

import styles from "./Board.module.css";
import List from "./List";
import BoardNew from "./BoardNew";
import SetAdmin from "redux/setAdmin/SetAdmin";

const Board = ({className}) => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
        division: '',
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
                division: selected.division,
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
            division: '',
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

    return(
        <div id={writeMode? styles.containerSlideUp:styles.containerSlideDown}>
            <table className={className}
                   style={{display:(writeMode||reviseState)? 'none':''}}
                   border="0">
                <thead>
                    <tr className={className}>
                        <th>No.</th>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th style={{
                            display: (adminState)? "" : "none"}}></th>
                    </tr> 
                </thead>
                <tbody>
        {/* 지금은 boards지만 */}
                        {boards.map(post =>
                            (
                                <List
                                    no={(boards.indexOf(post))+1}
                                    className={className}
                                    post={post}
                                    postClickHandler={postClickHandler}
                                    onDelete={onDelete}
                                />
                            ))
                        }
                </tbody>

            </table>

            <div className={(writeMode||reviseState)? styles.writeButtonPositon:styles.editorElements}>
                <div style={{display: (writeMode||reviseState)? 'none':''}}>
                    <SetAdmin />
                </div>
                <Link to={adminState? '/Notice':'/LogIn'}>
                    <button className={styles.noticeButton}
                    onClick={(writeMode||reviseState)? offWriteMode : onWriteMode}>
                    {(writeMode||reviseState)? '게시판으로 가기':'글쓰기'}</button>
                </Link>
            </div>

            <div style={{display: (writeMode||reviseState)? '':'none'}}>
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