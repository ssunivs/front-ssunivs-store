import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete, boardSelected } from "./action";

import List from "./List";
import RichTextEditor from "./RichTextEditor";

const Board = () => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
        postDate: ''
    });

    const dispatch = useDispatch();

    const onDelete = (postId) => dispatch(boardDelete(postId));
    const onSave = (dataToSave) => dispatch(boardSave(dataToSave));

    const {selected} = useSelector(state => state.board);

    const {boards} = useSelector(state => state.board);

    const postClickHandler = (postId) => 
    {
        dispatch(boardSelected(postId));

        if(JSON.stringify(selected) !== '{}') {
            setPost(selected);
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
            id: '', title: '', content: '', postDate: ''
        })
    }

    return(
        <div>
            <div>
                <table>
                    <tbody>
                        <tr align="center">
                            <td width="50">번호</td>
                            <td width="100">제목</td>
                            <td width="200">내용</td>
                            <td width="100">날짜</td>
                        </tr>
                        {
                            boards.map(post =>
                            (
                                <List
                                    id={post.id}
                                    title={post.title}
                                    content={post.content}
                                    postClickHandler={postClickHandler}
                                    postDate={post.postDate}
                                    onDelete={onDelete}
                                    post={post}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <RichTextEditor 
                    changeInput={changeInput}
                    onSave={onSave}
                    resetForm={resetForm}
                />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Board;