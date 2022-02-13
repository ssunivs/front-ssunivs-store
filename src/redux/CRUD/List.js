import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const List = ({ no, className, post, postClickHandler, onDelete }) => {
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);
    
    return(
            <tr className={className}>
                <td>{no.toString().padStart(3,'0')}</td>
                <td>{post.division}</td>
                <td
                    onClick={()=>postClickHandler(post.id)}>
                    <Link to="/Notice.post">{post.title}</Link>
                </td>
                <td>{post.writer}</td>
                <td>{post.postDate}</td>

                <td><button onClick={() => onDelete(post.id)}
                style={{display: (adminState)? "":"none"}}>X</button></td>

                <td style={{display: "none"}}>{post.content}</td>
            </tr>
    );
};


export default List;