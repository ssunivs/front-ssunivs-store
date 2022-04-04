import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const List = ({ no, tableStyle, post, onDelete }) => {
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);
    const substrUpdatedAt = post.updatedAt.substr(5,2) + '/' + post.updatedAt.substr(8,2);

    const history = useHistory();

    return(
            <tr className={tableStyle.notice_listRow}
                onClick={()=> history.push('/NoticePost/' + post.id)}>
                <td style={{display: (adminState)? "":"none"}}>{no.toString().padStart(3,'0')}</td>
                <td className={tableStyle.notice_listOnlyWeb}>임시 분류</td>
                {/* <td className={tableStyle.notice_listOnlyWeb}>{post.sort}</td> */}
                <td className={tableStyle.notice_listTitle}
                    >
                    {post.title}
                    <div className={tableStyle.notice_listOnlyMobile}>
                        <div>임시 분류</div>
                        {/* <div>{post.sort}</div> */}
                        <div>{post.writer.username}</div>
                        <div>{substrUpdatedAt}</div>
                    </div>
                </td>
                <td className={tableStyle.notice_listOnlyWeb}>{post.writer.username}</td>
                <td className={tableStyle.notice_listOnlyWeb}>{substrUpdatedAt}</td>

                <td><button onClick={(e) => onDelete(e, post.id)}
                // 딜리트 눌러도 post 열리네...
                style={{display: (adminState)? "":"none"}}>X</button></td>
            </tr>
    );
};


export default List;