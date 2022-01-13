import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom";

import SocialLinks from "components/SocialLinks";
import styles from "components/Menu.module.css";

function Menu(){
    const [open, setOpen] = useState(false);
    const onMenuClick = () =>{
        setOpen((current) => !current);
    }

    //Detect pathname
    const location = useLocation();
    let path = location.pathname;

    useEffect((path) => {
        path = location.pathname;
    }, [location]);

    return (
        <div>
            <div className={styles.hamburgerIcon}
                onClick={onMenuClick}>
                <div className={open? styles.line1Actived : styles.line}
                    style={{backgroundColor: (path==="/")? "white" : "#b2b2b2"}}></div>
                <div className={open? styles.line2Actived : styles.line}
                    style={{backgroundColor: (path==="/")? "white" : "#b2b2b2"}}></div>
                <div className={open? styles.line3Actived : styles.line}
                    style={{backgroundColor: (path==="/")? "white" : "#b2b2b2"}}></div>
            </div>
            
            <div className={open? styles.menuOpend : styles.menuClosed}
                style={{backgroundColor: "#04488C"}}>
            
            <div className = {styles.search}>Search</div>
            
            <ul className={styles.menuList}>
                <li>ABOUT US</li>
                <ul className={styles.detailLists}>
                <Link to="/AboutSsua"><li className={styles.list}>ssua</li></Link>
                <Link to="/AboutSsunivers"><li className={styles.list}>ssuniverse</li></Link>
                    <br></br>
                </ul>

                <li>STORE</li>
                <ul className={styles.detailLists}>
                <Link to="/MainStore"><li className={styles.list}>All</li></Link>
                <Link to="/Reservation"><li className={styles.list}>Reservation</li></Link>
                    <br></br>
                </ul>

                <li>BOARD</li>
                <ul className={styles.detailLists}>
                <Link to="/Notice"><li className={styles.list}>Notice</li></Link>
                <Link to="/FAQ"><li className={styles.list}>FAQ</li></Link>
                    <br></br>
                </ul>

                <li>CONTACT</li>
                <ul className={styles.detailLists}>
                <a  href="mailto:ssua@ssunivs.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <li className={styles.list}>ssua@ssunivs.com</li>
                </a>
                </ul>
            </ul>

            <SocialLinks size="30px" color="white"/>

                <ul className={styles.user}>
                    <Link to="/LogIn"><li className={styles.list}>LOG IN</li></Link>
                    <Link to="/MyPage"><li className={styles.list}>MY PAGE</li></Link>
                    <Link to="Cart"><li className={styles.list}>CART</li></Link>    
                </ul>
            </div>
        </div>
    );
}

export default Menu;