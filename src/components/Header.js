import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import {Link} from "react-router-dom";
import ssunivers_logo from "assets/ssunivers_logo.png";
import store_logo from "assets/store_logo.png";
import Menu from "components/Menu";

import styles from "components/Header.module.css";

// import {
//     IoMdPerson,
//     IoMdCart
// } from "react-icons/io";

function Header(){ //메뉴 & 로고  & mypage,cart

    //Detect pathname
    const location = useLocation();
    let path = location.pathname;

    useEffect((path) => {
        path = location.pathname;
    }, [location]);

    return (
        <div id={styles.header}>

            <div className={styles.menu}>
                <Menu />
            </div>

            <div className={styles.Logos}
                style={{color: (path==="/")? "white" : "#b2b2b2"}}>
                <Link to="/">
                <img 
                className={styles.mainLogo}
                // src={store_logo}
                src={ssunivers_logo}
                alt="SSUNIVERSE main logo" 
                />
                </Link>
                {/* <div className={styles.logoFence}>|</div>
                <div className={styles.moveToPage}>
                        <a style={{color: (path==="/")? "white" : "#b2b2b2"}}
                        href="https://www.ssunivs.com/">store</a>
                </div> */}
                {/* <div id={styles.storeLogo}>
                        <a style={{color: (path==="/")? "white" : "#b2b2b2"}}
                        href="https://www.ssunivs.com/">
                            <img src={store_logo} alt="store logo" className={styles.helloSsunivs}></img>
                        </a>
                </div> */}
            </div>
            <div className={styles.storeLogo}>
                <a
                href="https://www.ssunivs.com/"
                target="_blank"
                rel="noreferrer">
                    <img 
                    id={styles.storeLogoImage}
                    src={store_logo}
                    alt="store_logo" 
                    />
                </a>
            </div>
                {/* <div className={styles.rnb}>
                <Link to={(logInState)?"/MyPage":"/LogIn"}><IoMdPerson size="40px" color={(path==="/")? "white" : "#b2b2b2"}/></Link>
                <Link to={(logInState)?"/Cart":"/LogIn"}><IoMdCart size="40px" color={(path==="/")? "white" : "#b2b2b2"}/></Link>
            </div> */}
        </div>
    );
}

export default Header;