// 공지사항에서 누르면 링크가 연결될 수 있게끔 링크연결
import { useSelector } from "react-redux";

import headTitle from "pages/headTitle.module.css";
import NavBar from "components/NavBar.js";

function Refund() {
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

export default Refund;