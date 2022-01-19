import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete, boardSelected } from "./action";

import List from "./List";

const Board = ({  }) => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: ''
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
            id: '', title: '', content: ''
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
                        </tr>
                        {
                            boards.map(post =>
                            (
                                <List
                                    id={post.id}
                                    title={post.title}
                                    content={post.content}
                                    /*onDelete={onDelete}
                                    postClickHandler={postClickHandler}

                                    onSave={onSave} 
                                    changeInput={changeInput} 
                                    post={post}
                                    resetForm={resetForm}*/
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Board;