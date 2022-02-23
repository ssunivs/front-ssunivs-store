import { 
    RiKakaoTalkFill,
    RiInstagramLine,
    RiYoutubeFill,
    RiTwitterFill,
    RiGithubFill} from "react-icons/ri";

import {CgLoadbar} from "react-icons/cg";
import {SiNotion} from "react-icons/si";

import { HiOutlineMail } from "react-icons/hi";

import styles from "components/SocialLinks.module.css";

function SocialLinks( { size, color } ){ //햄버거 메뉴, 푸터에 들어갑니다
    return (
        <div className={styles.socialIcons}>
            <a title="KakaoTalk"
                href="https://pf.kakao.com/_JNgis/chat"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                        color: color}}><RiKakaoTalkFill className={styles.icon}/></a>
            <CgLoadbar  className={styles.iconsConnection} size="15"/>
            <a title="email"
                href="mailto:ssua@ssunivs.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><HiOutlineMail className={styles.icon}/></a>
            <CgLoadbar  className={styles.iconsConnection} size="15"/>
            <a title="Instagram"
                href="https://www.instagram.com/snvs.official/"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiInstagramLine className={styles.icon}/></a>
            <CgLoadbar  className={styles.iconsConnection} size="15"/>
            <a title="Twitter"
                href="https://nitter.net/ssunivs/status/1433695440625487873#m"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiTwitterFill className={styles.icon}/></a>
            <CgLoadbar  className={styles.iconsConnection} size="15"/>
            <a title="Youtube"
                href="https://www.youtube.com/channel/UC1xb52mAFAng2sQFaBhZ-KQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiYoutubeFill className={styles.icon}/></a>
            <CgLoadbar  className={styles.iconsConnection} size="15"/>
            <a  title="Notion"
                href="https://www.notion.so/ssuniverse/SSUNIVERSE-7373f0cd163d4d2ca0b1574389441727"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><SiNotion className={styles.icon} size="25"/></a>
            <CgLoadbar  className={styles.iconsConnection} size="15"/>
            <a  title="GitHub"
                href="https://github.com/ssunivs"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiGithubFill className={styles.icon}/></a>
        
        </div>
    );
}

export default SocialLinks;