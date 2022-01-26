import { Link } from "react-router-dom";

const List = ({ no, id, title, postClickHandler,
            writer, division, postDate, onDelete, className
            , adminState, content }) => {

    const  writeDate = postDate; //수정필요
    
    return(
            <tr className={className}>
                <td>{no.toString().padStart(3,'0')}</td>
                <td>{division}</td>
                <Link to="/Notice.post">
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