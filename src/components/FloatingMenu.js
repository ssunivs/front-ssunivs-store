import styles from "components/FloatingMenu.module.css";
import fixSsuaIcon from "../assets/fix_ssua.png";

function FloatingMenu() {
    return (
        <div id={styles.floatingMenu}>
                <img 
                className={styles.fixSsuaIcon}
                src={fixSsuaIcon}
                alt="슈아고정버튼" 
                />
        </div> 
    );
}

export default FloatingMenu;