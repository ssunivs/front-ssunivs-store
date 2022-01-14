import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";

function Notice(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>공지사항</h1>
        </div>
    );
}

export default Notice;