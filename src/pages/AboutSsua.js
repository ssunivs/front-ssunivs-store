import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";

function AboutSsua(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>슈아(ssu-a)를 소개합니다 !</h1>
        </div>
    );
}

export default AboutSsua;
