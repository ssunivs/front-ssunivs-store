import { useDispatch, useSelector } from "react-redux";
import { setRevise } from "redux/CRUD/revise/action";
import { Link } from "react-router-dom";

import draftToHtml from 'draftjs-to-html';

import styles from "./Notice.module.css"
import NavBar from "components/NavBar.js";

function NoticePost(){
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    const {selected} = useSelector(state => state.board);
    const contentRawToHtml = draftToHtml(JSON.parse(selected.content));
    
    const substrCreatedAt = selected.createdAt.substr(5,2) + '/' + selected.createdAt.substr(8,2);
    const substrUpdatedAt = selected.updatedAt.substr(0,10);

    const dispatch = useDispatch();

    const onRevise = () => {
        dispatch(setRevise());
    }
    return (
        <div>
            <br></br>
            <NavBar />
            <div id={styles.overContainer}
                 className={styles.containerSlideUp}>
                {/* <div className={styles.sort}>{selected.sort}</div> */}
                <div className={styles.sort}>임시 분류</div>
                <h1>{selected.title}</h1>
                <div className={styles.information}>
                    <div>{selected.writer.username} | {substrCreatedAt}</div>
                    <i>&nbsp; {substrUpdatedAt}</i>
                </div>
            </div>

            <div id={styles.container}
                 className={styles.containerSlideUp}
                 dangerouslySetInnerHTML={{__html: contentRawToHtml}} />

            <div id={styles.underContainer}
                 className={styles.containerSlideUp}>
                <Link to={adminState?'/Notice':'/LogIn'}
                    style={{display: adminState?'':'none'}}
                    onClick={onRevise}>
                    <button className={styles.noticeButton}>수정하기</button>
                </Link>

                <div className={styles.backToNoticeButton_positon}>
                    <Link to='/Notice'>
                        <button className={styles.noticeButton}>게시판으로 가기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NoticePost;