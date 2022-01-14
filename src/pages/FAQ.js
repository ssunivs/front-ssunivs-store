import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";

function FAQ(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>FAQ : 자주 묻는 질문</h1>
        </div>
    );
}

export default FAQ;