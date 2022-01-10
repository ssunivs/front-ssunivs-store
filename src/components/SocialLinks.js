import { 
    RiKakaoTalkFill,
    RiInstagramLine,
    RiYoutubeFill,
    RiTwitterFill,
    RiGithubFill} from "react-icons/ri";

import styles from "components/SocialLinks.module.css";

function SocialLinks( { size } ){ //햄버거 메뉴, 푸터에 들어갑니다
    return (
        <div className={styles.socialIcons}>
            <a title="KakaoTalk"
                href="https://pf.kakao.com/_JNgis/chat"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size}}><RiKakaoTalkFill /></a>

            <a title="Instagram"
                href="https://www.instagram.com/snvs.official/"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size}}><RiInstagramLine /></a>

            <a title="Youtube"
                href="https://www.youtube.com/channel/UC1xb52mAFAng2sQFaBhZ-KQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size}}><RiYoutubeFill /></a>

            <a title="Twitter"
                href="https://nitter.net/ssunivs/status/1433695440625487873#m"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size}}><RiTwitterFill /></a>

            <a title="GitHub"
                href="https://github.com/ssunivs"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize : size}}><RiGithubFill /></a>
        </div>
    );
}

export default SocialLinks;