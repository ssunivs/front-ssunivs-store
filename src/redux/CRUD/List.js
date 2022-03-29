import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const List = ({ no, tableStyle, post, postClickHandler, onDelete }) => {
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);
    const substrUpdatedAt = post.updatedAt.substr(5,2) + '/' + post.updatedAt.substr(8,2);
    
    return(
            <tr className={tableStyle.notice_listRow}>
                <td style={{display: (adminState)? "":"none"}}>{no.toString().padStart(3,'0')}</td>
                <td className={tableStyle.notice_listOnlyWeb}>임시 분류</td>
                {/* <td className={tableStyle.notice_listOnlyWeb}>{post.sort}</td> */}
                <td className={tableStyle.notice_listTitle}
                    onClick={()=>postClickHandler(post.id)}
                    >
                    <Link to="/Notice.post">{post.title}</Link>
                    <div className={tableStyle.notice_listOnlyMobile}>
                        <div>임시 분류</div>
                        {/* <div>{post.sort}</div> */}
                        <div>{post.writer.username}</div>
                        <div>{substrUpdatedAt}</div>
                    </div>
                </td>
                <td className={tableStyle.notice_listOnlyWeb}>{post.writer.username}</td>
                <td className={tableStyle.notice_listOnlyWeb}>{substrUpdatedAt}</td>

                <td><button onClick={() => onDelete(post.id)}
                style={{display: (adminState)? "":"none"}}>X</button></td>

                <td style={{display: "none"}}>{post.content}</td>
            </tr>
    );
};


export default List;