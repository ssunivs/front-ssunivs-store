import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import about_ssuniverse_img from "assets/about_ssuniverse_img.png";
import styles from "pages/AboutSsuniverse.module.css";


function AboutSsunivers(){
    return (
        <div>
            <br></br>
            <NavBar />
            <h1 className={headTitle.head}>슈니버스를 소개합니다 !</h1>
            <img 
                className={styles.aboutSsuniverseImg}
                src={about_ssuniverse_img}
                alt="about_ssuniverse_img" 
                />
        </div>
    );
}

export default AboutSsunivers;