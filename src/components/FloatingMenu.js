// import React from 'react'
import styles from "components/FloatingMenu.module.css";
import fixSsuaIcon from "../assets/fix_ssua.png";

// 이거왜안뜨지...
function FloatingMenu() {
    return (
        <div id={styles.floatingMenu}>
            Hello
                <img 
                className={styles.fixSsuaIcon}
                src={fixSsuaIcon}
                alt="fix_ssua" 
                />
        </div> 
    );
}

export default FloatingMenu;