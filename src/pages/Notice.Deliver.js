// 공지사항에서 누르면 링크가 연결될 수 있게끔 링크연결
// store product 에서 링크 연결시켜서 공지사항 누르면 나올 수 있게끔 조절해놓기
import { useSelector } from "react-redux";

import headTitle from "pages/headTitle.module.css";
import NavBar from "components/NavBar.js"

function Deliver(){
    const {selected} = useSelector(state => state.board);

    return (
        <div>
            <br></br>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>{selected.title}</h1>
            <div>{selected.content}</div>
        </div>
    );
}

export default Deliver;