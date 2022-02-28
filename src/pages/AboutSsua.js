import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import about_ssua_img from "assets/about_ssua_img.png";
import styles from "pages/AboutSsua.module.css";

function AboutSsua(){
    return (
        <div>
            <br></br>
            <NavBar />
            <h1 className={headTitle.head}>슈아(𝐒𝐒𝐔-𝐀)를 소개합니다 !</h1>
            <img 
                className={styles.aboutSsuaImg}
                src={about_ssua_img}
                alt="about_ssua_img" 
                />
        </div>
    );
}
export default AboutSsua;
