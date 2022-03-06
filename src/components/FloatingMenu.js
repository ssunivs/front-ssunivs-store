import { useState, useEffect } from "react";

import styles from "components/FloatingMenu.module.css";
import fixSsuaIcon from "../assets/ssua_floating_btn.png";
import {GrMail,GrInstagram} from "react-icons/gr"
import {RiKakaoTalkFill} from "react-icons/ri"
import {AiFillShopping} from "react-icons/ai";
import {BiChevronUpCircle} from "react-icons/bi";

function FloatingMenu() {
    const [open, setOpen] = useState(false);
    const onFloatingMenuClick = () =>{
        setOpen((current) => !current);
    }
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
    }, [ScrollY])

    useEffect(() => {
    const watch = () => {
        window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
            setScrollY(0);  // ScrollY 의 값을 초기화
    }

    return (
        <div>
            <div className={open?  styles.scrollToTopHidden : styles.scrollToTop}
                onClick={handleTop}>
                <BiChevronUpCircle size="35" color="#04488C"/>
            </div>
            <div className={styles.floatingMenu}>
                <ul className={open? styles.openDetailMenu : styles.floatingDetailMenu}>
                        <a title="Shop"
                        href="https://www.ssunivs.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <li id={styles.floatingDetailIcons}><AiFillShopping size="35" color="#04488C"/></li>
                        </a>
                        <a title="KakaoTalk"
                        href="https://pf.kakao.com/_JNgis/chat"
                        target="_blank"
                        rel="noopener noreferrer">
                            <li id={styles.floatingDetailIcons}><RiKakaoTalkFill size="35" color="#04488C"/></li>
                        </a>
                        <a title="Instagram"
                        href="https://www.instagram.com/snvs.official/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <li id={styles.floatingDetailIcons}><GrInstagram size="35" color="#04488C"/></li>
                        </a>
                        <a title="Mail"
                        href="mailto:ssua@ssunivs.com"
                        target="_blank"
                        rel="noopener noreferrer">
                            <li id={styles.floatingDetailIcons}><GrMail size="35" color="#04488C"/></li>
                        </a>
                </ul>
                    <img 
                    className={styles.fixSsuaIcon}
                    onClick={onFloatingMenuClick}
                    src={fixSsuaIcon}
                    alt="슈아고정버튼" 
                    />
            </div> 
        </div>
    );
}

export default FloatingMenu;