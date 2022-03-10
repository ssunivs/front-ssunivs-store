import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const List = ({ no, tableStyle, post, postClickHandler, onDelete }) => {
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);
    
    return(
            <tr className={tableStyle.notice_listRow}>
                <td style={{display: (adminState)? "":"none"}}>{no.toString().padStart(3,'0')}</td>
                <td className={tableStyle.notice_listOnlyWeb}>{post.sort}</td>
                <td className={tableStyle.notice_listTitle}
                    onClick={()=>postClickHandler(post.id)}>
                    <Link to="/Notice.post">{post.title}</Link>
                    <div className={tableStyle.notice_listOnlyMobile}>
                        <div>{post.sort}</div>
                        <div>{post.writer}</div>
                        <div>{post.postDate}</div>
                    </div>
                </td>
                <td className={tableStyle.notice_listOnlyWeb}>{post.writer}</td>
                <td className={tableStyle.notice_listOnlyWeb}>{post.postDate}</td>

                <td><button onClick={() => onDelete(post.id)}
                style={{display: (adminState)? "":"none"}}>X</button></td>

                <td style={{display: "none"}}>{post.content}</td>
            </tr>
    );
};


export default List;