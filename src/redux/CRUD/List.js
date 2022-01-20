import { Link } from "react-router-dom";

const List = ({ id, title, postClickHandler,
            writer, division, onDelete, className }) => {
                const link = "/Notice." + id;
    return(
            <tr className={className}>
                <td>{division}</td>
                <Link to={link} onClick={postClickHandler}>
                <td>{title}</td>
                </Link>
                <td>{writer}</td>
                <td><button onClick={onDelete}>X</button></td>
            </tr>
    );
};


export default List;