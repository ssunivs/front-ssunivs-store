import { useDispatch, useSelector } from "react-redux";
import { setRevise } from "redux/CRUD/revise/action";
import { Link } from "react-router-dom";

import draftToHtml from 'draftjs-to-html';

import styles from "./Notice.module.css"
import headTitle from "pages/headTitle.module.css";
import NavBar from "components/NavBar.js";

function NoticePost(){
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    const {selected} = useSelector(state => state.board);
    const contentRawToHtml = draftToHtml(JSON.parse(selected.content));
    
    const dispatch = useDispatch();

    const onRevise = () => {
        dispatch(setRevise());
    }

    return (
        <div>
            <br></br>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}
                style={{marginBottom: '-30px'}}>{selected.title}</h1>
            
            <div id={styles.container}>
                <div className={styles.postInformation}>
                    <div className={styles.postInformationDiv}>분류: {selected.division}</div>
                    <div className={styles.postInformationDiv}>작성일: {selected.postDate}</div>
                </div>

            <div dangerouslySetInnerHTML={{__html: contentRawToHtml}} />
            </div>

                <div id={styles.underContainer}
                     className={styles.postInformation}>
                    <div className={styles.postInformationDiv}>작성자: {selected.writer}</div>
                    <div>
                        <Link to={adminState?'/Notice':'/LogIn'}
                              style={{display: adminState?'':'none'}}
                              onClick={onRevise}
                              className={styles.postInformationDiv}>수정하기</Link>
                        <Link to='/Notice'
                              style={{marginLeft: '10px'}}
                              className={styles.postInformationDiv}>목록</Link>
                    </div>
                </div>
            
        </div>
    );
}

export default NoticePost;