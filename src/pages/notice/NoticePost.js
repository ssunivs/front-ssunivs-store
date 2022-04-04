import { useDispatch, useSelector } from "react-redux";
import { setRevise } from "redux/CRUD/revise/action";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import  axios  from "axios";

import draftToHtml from 'draftjs-to-html';

import styles from "./Notice.module.css"
import NavBar from "components/NavBar.js";

function NoticePost(){
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    const {id} = useParams();
    const [post, setPost] = useState({});
    const getPost = async () => {
        try {
          const getPostData = await axios.get(`/api/v1/post/${id}`);
          setPost(getPostData.data);
        } catch(error) {
          alert(error.response.data.message);
        }
      }

    //첫 랜더링 이 후에useEffect가 일어남..
    useEffect(() => {
        getPost();
    // eslint-disable-next-line
    }, []);
    
    const test = (post, type)=>{
        if(post?.id >0){
        if(type === "contentRawToHtml" ) return draftToHtml(JSON.parse(post.content))
        if(type === "substrCreatedAt") return post.createdAt.substr(5,2) + '/' + post.createdAt.substr(8,2);
        if(type === "substrUpdatedAt" ) return post.updatedAt.substr(0,10);
        }
    }

    const dispatch = useDispatch();

    const onRevise = () => {
        dispatch(setRevise());
    }
    return (
        <div>
            <br></br>
            <NavBar />
            {/* 처음 post내용이 {}일 때 렌더링 안되고, getPost가 호출된 이후 랜더링 */}
            {post?.id && <>
            <div id={styles.overContainer}
                 className={styles.containerSlideUp}>
                {/* <div className={styles.sort}>{post.sort}</div> */}
                <div className={styles.sort}>임시 분류</div>
                <h1>{post.title}</h1>
                <div className={styles.information}>
                    <div>{post.writer.username} | {test(post,"substrCreatedAt")}</div>
                    <i>&nbsp; {test(post,"substrUpdatedAt")}</i>
                </div>
            </div>

            <div id={styles.container}
                 className={styles.containerSlideUp}
                 dangerouslySetInnerHTML={{__html: test(post, "contentRawToHtml")}} /> 

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
            
            </>}


        </div>
    );
}

export default NoticePost;