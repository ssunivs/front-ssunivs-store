import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSave, boardDelete, boardSelected } from "./action";

import List from "./List";
import RichTextEditor from "./RichTextEditor";

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

    const onDelete = (postId) => dispatch(boardDelete(postId));
    const onSave = (dataToSave) => {
        dispatch(boardSave(dataToSave));
    }

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
        console.log(post);
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

    const test =  {
        
            id: '123',
            title: '23',
            content: '2',
            division: '2',
            writer: '33',
            postDate: 'dd'
        
    }

    return(
        <div>
            <table className={className}
            border="0">
                <thead>
                    <tr className={className}>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr> 
                </thead>
                <tbody>
                        {boards.map(post =>
                            (
                                <List
                                    id={post.id}
                                    className={className}
                                    title={post.title}
                                    writer={post.writer}
                                    division={post.division}
                                    postClickHandler={postClickHandler}
                                    onDelete={onDelete}
                                />
                            ))
                        }
                </tbody>

            </table>  
                <form>
                    <input type="text" name="title" value={post.title} 
                    placeholder="title" onChange={changeInput}/>
                    <RichTextEditor/>
                    <input type="text" name="division" value={post.division}
                    placeholder="division" onChange={changeInput}/>
                    <input type="text" name="writer" value={post.writer}
                    placeholder="writer" onChange={changeInput}/>
                    <button onClick={onSave} >Save</button>
                </form>
        </div>
    );
};

export default Board;