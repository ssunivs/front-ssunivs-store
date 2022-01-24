import { 
    RiKakaoTalkFill,
    RiInstagramLine,
    RiYoutubeFill,
    RiTwitterFill,
    RiGithubFill} from "react-icons/ri";

import { HiOutlineMail } from "react-icons/hi";

import styles from "components/SocialLinks.module.css";

function SocialLinks( { size, color } ){ //햄버거 메뉴, 푸터에 들어갑니다
    return (
        <div className={styles.socialIcons}>
            <a title="KakaoTalk"
                className={styles.icon}
                href="https://pf.kakao.com/_JNgis/chat"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                        color: color}}><RiKakaoTalkFill /></a>

            <a title="Instagram"
                className={styles.icon}
                href="https://www.instagram.com/snvs.official/"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiInstagramLine /></a>

            <a title="Youtube"
                className={styles.icon}
                href="https://www.youtube.com/channel/UC1xb52mAFAng2sQFaBhZ-KQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiYoutubeFill /></a>

            <a title="Twitter"
                className={styles.icon}
                href="https://nitter.net/ssunivs/status/1433695440625487873#m"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiTwitterFill /></a>

            <a title="GitHub"
                className={styles.icon}
                href="https://github.com/ssunivs"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><RiGithubFill /></a>
            
            <a title="email"
                href="mailto:ssua@ssunivs.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size,
                    color: color}}><HiOutlineMail /></a>

        </div>
    );
}

export default SocialLinks;