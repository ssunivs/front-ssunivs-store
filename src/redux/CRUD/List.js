const List = ({ id, title, content, postClickHandler, postDate, onDelete }) => {
    return(
            <tr>
                <td>{id}</td>
                <td><button onClick={postClickHandler}>{title}</button></td>
                <td>{content}</td>
                <td>{postDate.toLocaleDateString('ko-KR')}</td>
                <td><button onClick={onDelete}>X</button></td>
            </tr>
    );
};


export default List;