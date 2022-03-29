import { useState } from "react";

import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import about_ssuniverse_img from "assets/about_ssuniverse_img.png";
import styles from "pages/AboutSsuniverse.module.css";

import regular_jm from "assets/member_profile/regular/regular-jm.png";
import regular_jy from "assets/member_profile/regular/regular-jy.png";
import regular_ji from "assets/member_profile/regular/regular-ji.png";
import regular_wj from "assets/member_profile/regular/regular-wj.png";
import regular_gh from "assets/member_profile/regular/regular-gh.png";
import regular_sy from "assets/member_profile/regular/regular-sy.png";
import regular_bm from "assets/member_profile/regular/regular-bm.png";
import regular_jc from "assets/member_profile/regular/regular-jc.png";

import hover_jm from "assets/member_profile/hover/hover-jm.png";
import hover_jy from "assets/member_profile/hover/hover-jy.png";
import hover_ji from "assets/member_profile/hover/hover-ji.png";
import hover_wj from "assets/member_profile/hover/hover-wj.png";
import hover_gh from "assets/member_profile/hover/hover-gh.png";
import hover_sy from "assets/member_profile/hover/hover-sy.png";
import hover_bm from "assets/member_profile/hover/hover-bm.png";
import hover_jc from "assets/member_profile/hover/hover-jc.png";

// import clicked_jy from "assets/member_profile/clicked/clicked-jy.png";
// import clicked_jm from "assets/member_profile/clicked/clicked-jm.png";
// import clicked_ji from "assets/member_profile/clicked/clicked-ji.png";
// import clicked_wj from "assets/member_profile/clicked/clicked-wj.png";
// import clicked_gh from "assets/member_profile/clicked/clicked-gh.png";
// import clicked_sy from "assets/member_profile/clicked/clicked-sy.png";
// import clicked_bm from "assets/member_profile/clicked/clicked-bm.png";
// import clicked_jc from "assets/member_profile/clicked/clicked-jc.png";


function AboutSsunivers(){
    const [isProfileHover1, setIsProfileHover1] = useState(false);
    const [isProfileHover2, setIsProfileHover2] = useState(false);
    const [isProfileHover3, setIsProfileHover3] = useState(false);
    const [isProfileHover4, setIsProfileHover4] = useState(false);
    const [isProfileHover5, setIsProfileHover5] = useState(false);
    const [isProfileHover6, setIsProfileHover6] = useState(false);
    const [isProfileHover7, setIsProfileHover7] = useState(false);
    const [isProfileHover8, setIsProfileHover8] = useState(false);

    return (
        <div>
            <br></br>
            <NavBar />
            <h1 className={headTitle.head}>슈니버스를 소개합니다 !</h1>
                <img className={styles.aboutSsuniverseImg} src={about_ssuniverse_img} alt="about_ssuniverse_img"/>

                <div className={styles.member_container}>
                    <div className={styles.member_item}
                        onMouseOver={() => setIsProfileHover1(true)}
                        onMouseOut={() => setIsProfileHover1(false)}>
                        <a href="https://www.instagram.com/jminnisfree" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img}
                            src={isProfileHover1 ? hover_jm : regular_jm} alt="CEO 최정민"></img>
                            {/* <img className={styles.member_profile_clicked_img}
                            src={clicked_jm} alt="CEO 최정민"></img> */}
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover2(true)}
                    onMouseOut={() => setIsProfileHover2(false)}>
                        <a href="mailto:isabel1001@naver.com" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img}
                            src={isProfileHover2 ? hover_jy : regular_jy} alt="PM 강지영"></img>
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover3(true)}
                    onMouseOut={() => setIsProfileHover3(false)}>
                        <a href="mailto:jeongin24@naver.com" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img}
                            src={isProfileHover3 ? hover_ji : regular_ji} alt="Lead Finance 박정인"></img>
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover4(true)}
                    onMouseOut={() => setIsProfileHover4(false)}>
                        <a href="https://github.com/makemyway-kr" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img}
                            src={isProfileHover4 ? hover_wj : regular_wj} alt="BE Developer 심원준"></img>
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover5(true)}
                    onMouseOut={() => setIsProfileHover5(false)}>
                        <a href="https://github.com/clroot" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img}
                            src={isProfileHover5 ? hover_gh : regular_gh} alt="Lead Developer 차건환"></img>
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover6(true)}
                    onMouseOut={() => setIsProfileHover6(false)}>
                        <a href="https://github.com/seyxxn" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img}
                            src={isProfileHover6 ? hover_sy : regular_sy} alt="FE Developer 박세연"></img>
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover7(true)}
                    onMouseOut={() => setIsProfileHover7(false)}>
                        <a href="https://github.com/6om1n" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img} 
                            src={isProfileHover7 ? hover_bm : regular_bm} alt="FE Developer 박보민"></img>
                        </a>
                    </div>
                    <div className={styles.member_item}
                    onMouseOver={() => setIsProfileHover8(true)}
                    onMouseOut={() => setIsProfileHover8(false)}>
                        <a href="mailto:gkswocks123@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img className={styles.member_profile_img} 
                            src={isProfileHover8 ? hover_jc : regular_jc} alt="FE Developer 한재찬"></img>
                        </a>
                    </div>
                </div>
        </div>
    );
}

export default AboutSsunivers;