import { Link } from "react-router-dom";

const List = ({ id, title, postClickHandler,
            writer, division, onDelete, className
            , adminState, content }) => {

    const link = "/Notice." + id;
    
    return(
            <tr className={className}>
                <td onClick={()=>postClickHandler(id)}>{division}</td>
                <Link to={link}>
                <td onClick={()=>postClickHandler(id)}>{title}</td>
                </Link>
                <td onClick={()=>postClickHandler(id)}>{writer}</td>
                <td><button onClick={() => onDelete(id)}
                style={{display: (adminState)? "":"none"}}>X</button></td>

                <td style={{display: "none"}}>{content}</td>
            </tr>
    );
};


export default List;