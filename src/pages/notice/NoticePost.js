import { useSelector } from "react-redux";

import draftToHtml from 'draftjs-to-html';

import headTitle from "pages/headTitle.module.css";
import NavBar from "components/NavBar.js";

function NoticePost(){
    const {selected} = useSelector(state => state.board);
    const contentRawToHtml = draftToHtml(JSON.parse(selected.content));

    return (
        <div>
            <br></br>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>{selected.title}</h1>
            
            <div dangerouslySetInnerHTML={{__html: contentRawToHtml}} />
        </div>
    );
}

export default NoticePost;