import { useState } from "react";

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
                    <li>ssuniverse</li>
                    <li>ssua</li>
                    <br></br>
                </ul>

                <li>STORE</li>
                <ul className={styles.detailLists}>
                    <li>All</li>
                    <li>Reservation</li>
                    <br></br>
                </ul>

                <li>BOARD</li>
                <ul className={styles.detailLists}>
                    <li>Notice</li>
                    <li>FAQ</li>
                    <br></br>
                </ul>

                <li>CONTACT</li>
                <ul className={styles.detailLists}>
                    <li>ssua@ssunivs.com</li>
                </ul>
            </ul>

            <SocialLinks size="20px"/>

            <div className={styles.user}>
                <div>LOG IN</div>
                <div>MY PAGE</div>
                <div>CART</div>
            </div>
            </div>
        </div>
    );
}

export default Menu;