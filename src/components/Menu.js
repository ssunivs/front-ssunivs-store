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
            
            <div>Serch</div>
            
            <ul>
                <li>ABOUT US</li>
                <li>ssuniverse</li>
                <li>ssua</li>

                <li>STORE</li>
                <li>All</li>
                <li>Reservation</li>

                <li>BOARD</li>
                <li>Notice</li>
                <li>FAQ</li>

                <li>CONTACT</li>
                <li>ssua@ssunivs.com</li>
            </ul>

            <SocialLinks size="20px"/>

            <div>
                <div>LOG IN</div>
                <div>MY PAGE</div>
                <div>CART</div>
            </div>
            </div>
        </div>
    );
}

export default Menu;