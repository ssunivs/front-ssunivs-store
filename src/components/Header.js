import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import {Link} from "react-router-dom";
import store_logo from "assets/store_logo.png";
import Menu from "components/Menu";

import styles from "components/Header.module.css";

//Detect LogInState
import { connect } from "react-redux";

import {
    IoMdPerson,
    IoMdCart
} from "react-icons/io";



function Header({logInState}){ //메뉴 & 로고  & mypage,cart

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
                className={styles.storeMainLogo}
                src={store_logo}
                alt="SSUNIVERSE Store main logo" 
                />
                </Link>
                <div className={styles.logoFence}>|</div>
                <div className={styles.moveToPage}>ssuniverse</div>
            </div>

            <div className={styles.rnb}>
                <Link to={(logInState)?"/MyPage":"/LogIn"}><IoMdPerson size="40px" color={(path==="/")? "white" : "#b2b2b2"}/></Link>
                <Link to={(logInState)?"/Cart":"/LogIn"}><IoMdCart size="40px" color={(path==="/")? "white" : "#b2b2b2"}/></Link>
            </div>
            
        </div>
    );
}

//Detect LogInState
const mapStateToProps = (state) => {
    return{
        logInState: state.logInOut.logInState
    };
}; 

export default connect(mapStateToProps)(Header);