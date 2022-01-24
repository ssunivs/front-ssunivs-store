import { Link } from "react-router-dom";

const List = ({ id, title, postClickHandler,
            writer, division, postDate, onDelete, className
            , adminState, content }) => {

    const link = "/Notice." + id;

    const  writeDate = postDate; //수정필요
    
    return(
            <tr className={className}>
                <td>{id}</td>
                <td>{division}</td>
                <Link to={link}>
                <td onClick={()=>postClickHandler(id)}>{title}</td>
                </Link>
                <td>{writer}</td>
                <td>{writeDate}</td>

                <td><button onClick={() => onDelete(id)}
                style={{display: (adminState)? "":"none"}}>X</button></td>

                <td style={{display: "none"}}>{content}</td>
            </tr>
    );
};


export default List;