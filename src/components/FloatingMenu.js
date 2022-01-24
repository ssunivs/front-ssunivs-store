import { useState } from "react";

import styles from "components/FloatingMenu.module.css";
import fixSsuaIcon from "../assets/fix_ssua.png";
import {GrMail,GrInstagram} from "react-icons/gr"
import {RiKakaoTalkFill} from "react-icons/ri"
import {AiFillShopping} from "react-icons/ai";

function FloatingMenu() {
    const [open, setOpen] = useState(false);
    const onFloatingMenuClick = () =>{
        setOpen((current) => !current);
    }
    return (
        <div className={styles.floatingMenu}>
            <ul className={open? styles.openDetailMenu : styles.floatingDetailMenu}>
                    <a title="Mail"
                    href="https://www.ssunivs.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <li id={styles.floatingDetailIcons}><AiFillShopping size="30" color="#04488C"/></li>
                    </a>
                    <a title="KakaoTalk"
                    href="https://pf.kakao.com/_JNgis/chat"
                    target="_blank"
                    rel="noopener noreferrer">
                        <li id={styles.floatingDetailIcons}><RiKakaoTalkFill size="30" color="#04488C"/></li>
                    </a>
                    <a title="Instagram"
                    href="https://www.instagram.com/snvs.official/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <li id={styles.floatingDetailIcons}><GrInstagram size="30" color="#04488C"/></li>
                    </a>
                    <a title="Mail"
                    href="mailto:ssua@ssunivs.com"
                    target="_blank"
                    rel="noopener noreferrer">
                        <li id={styles.floatingDetailIcons}><GrMail size="30" color="#04488C"/></li>
                    </a>
            </ul>
                <img 
                className={styles.fixSsuaIcon}
                onClick={onFloatingMenuClick}
                src={fixSsuaIcon}
                alt="슈아고정버튼" 
                />
        </div> 
    );
}

export default FloatingMenu;