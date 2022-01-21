import { Link } from "react-router-dom";

const List = ({ id, title, postClickHandler,
            writer, division, onDelete, className }) => {

    const link = "/Notice." + id;
    
    return(
            <tr className={className}>
                <td onClick={()=>postClickHandler(id)}>{division}</td>
                <Link to={link}>
                <td onClick={()=>postClickHandler(id)}>{title}</td>
                </Link>
                <td onClick={()=>postClickHandler(id)}>{writer}</td>
                <td><button onClick={() => onDelete(id)}>X</button></td>
            </tr>
    );
};


export default List;