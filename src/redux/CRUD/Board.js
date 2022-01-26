import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete, boardSelected } from "./action";

import styles from "./Board.module.css";
import SetAdmin from "redux/setAdmin/SetAdmin";
import List from "./List";
import BoardNew from "./BoardNew";

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
        dispatch(boardSave(dataToSave));
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
                [e.target.name]: e.target.value
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
    }
    
    const {boards} = useSelector(state => state.board);


    return(
        <div id={styles.container}>
            <table className={className}
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
                        {boards.map(post =>
                            (
                                <List
                                    no={(boards.indexOf(post))+1}
                                    id={post.id}
                                    className={className}
                                    title={post.title}
                                    writer={post.writer}
                                    division={post.division}
                                    postDate={post.postDate}
                                    postClickHandler={postClickHandler}
                                    onDelete={onDelete}
                                    adminState={adminState}
                                    content={post.content}
                                />
                            ))
                        }
                </tbody>

            </table>  

            <SetAdmin />

            <BoardNew
                onSave={onSave}
                changeInput={changeInput}
                post={post}
                resetForm={resetForm}
                adminState={adminState}
            />
        </div>
    );
};

export default Board;