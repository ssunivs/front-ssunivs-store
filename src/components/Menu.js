import { useState } from "react";
import {Link} from "react-router-dom";

import SocialLinks from "components/SocialLinks";
import styles from "components/Menu.module.css";

function Menu(){
    const [open, setOpen] = useState(false);
    const onMenuClick = () =>{
        setOpen((current) => !current);
    }

    return (
        <div>
            <div className={styles.hamburgerIcon}
                onClick={onMenuClick}>
                <div className={open? styles.line1Actived : styles.line}></div>
                <div className={open? styles.line2Actived : styles.line}></div>
                <div className={open? styles.line3Actived : styles.line}></div>
            </div>
            
            <div className={open? styles.menuOpend : styles.menuClosed}>
            
            <div className = {styles.search}>Search</div>
            
            <ul className={styles.menuList}>
                <li>ABOUT US</li>
                <ul className={styles.detailLists}>
                <Link to="/AboutSsua"><li>ssua</li></Link>
                <Link to="/AboutSsunivers"><li>ssuniverse</li></Link>
                    <br></br>
                </ul>

                <li>STORE</li>
                <ul className={styles.detailLists}>
                <Link to="/MainStore"><li>All</li></Link>
                <Link to="/Reservation"><li>Reservation</li></Link>
                    <br></br>
                </ul>

                <li>BOARD</li>
                <ul className={styles.detailLists}>
                <Link to="/Notice"><li>Notice</li></Link>
                <Link to="/FAQ"><li>FAQ</li></Link>
                    <br></br>
                </ul>

                <li>CONTACT</li>
                <ul className={styles.detailLists}>
                <a  href="mailto:ssua@ssunivs.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <li>ssua@ssunivs.com</li>
                </a>
                </ul>
            </ul>

            <SocialLinks size="30px"/>

                <ul className={styles.user}>
                    <Link to="/LogIn"><li>LOG IN</li></Link>
                    <Link to="/MyPage"><li>MY PAGE</li></Link>
                    <Link to="Cart"><li>CART</li></Link>    
                </ul>
            </div>
        </div>
    );
}

export default Menu;