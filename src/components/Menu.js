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
                    <li>ssua@ssunivs.com</li>
                </ul>
            </ul>

            <SocialLinks size="30px"/>

            <div className={styles.user}>
            <Link to="/LogIn"><div>LOG IN</div></Link>
            <Link to="/MyPage"><div>MY PAGE</div></Link>
            <Link to="Cart"><div>CART</div></Link>
            </div>
            </div>
        </div>
    );
}

export default Menu;