import styles from "components/NavBar.module.css"
import {Link} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi"

/*className item 필요없을듯*/

function NavBar (){
    return (
        <div id={styles.navBar}>
            <ul>
                <li><a href="/AboutSsua" clasName={styles.item}>
                    ABOUT US<i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/AboutSsua">ssua</Link></li>
                                <li><Link to="/AboutSsunivers">ssunivers</Link></li>
                            </ul>
                </li>
                <li><a href="/MainStore" clasName={styles.item}>
                    SHOP <i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/MainStore">All</Link></li>
                                <li><Link to="/Reservation">Reservation</Link></li>
                            </ul>
                </li>
                <li><a href="/Notice" clasName={styles.item}>
                    BOARD<i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/Notice">Notice</Link></li>
                                <li><Link to="/FAQ">FAQ</Link></li>
                            </ul>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;
