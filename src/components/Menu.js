import { useState } from "react";

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
                eee
            </div>
        </div>
    );
}

export default Menu;