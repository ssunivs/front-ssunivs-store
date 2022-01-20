import { Link } from "react-router-dom";

const List = ({ title, postClickHandler,
            writer, division, onDelete, className }) => {
    return(
            <tr className={className}>
                <td>{division}</td>
                <Link to="/Notice.Event" onClick={postClickHandler}>
                <td>{title}</td>
                </Link>
                <td>{writer}</td>
                <td><button onClick={onDelete}>X</button></td>
            </tr>
    );
};


export default List;