import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";


function AboutSsunivers(){
    return (
        <div>
            <br></br>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>슈니버스를 소개합니다 !</h1>
        </div>
    );
}

export default AboutSsunivers;