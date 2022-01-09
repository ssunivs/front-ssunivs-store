import {Link} from "react-router-dom";
import store_logo from "assets/store_logo.png";
import Menu from "components/Menu";

import styles from "components/Header.module.css";

import {
    IoMdPerson,
    IoMdCart
} from "react-icons/io";



function Header(){ //메뉴 & 로고  & mypage,cart
    return (
        <div id={styles.header}>

            <Menu />

            <div className={styles.Logos}>
                <Link to="/">
                <img 
                className={styles.storeMainLogo}
                src={store_logo}
                alt="SSUNIVERSE Store main logo" 
                />
                </Link>
                <div className={styles.logoFence}>|</div>
                <div>ssuniverse</div>
            </div>

            <div className={styles.rnb}>
                <Link to="/MyPage"><IoMdPerson size="40px" color="white"/></Link>
                <Link to="/Cart"><IoMdCart size="40px" color="white"/></Link>
            </div>
            
        </div>
    );
}

export default Header;