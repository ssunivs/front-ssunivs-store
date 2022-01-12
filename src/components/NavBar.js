import styles from "components/NavBar.module.css"
import {Link} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi"

function NavBar (){
    return (
        <div id={styles.navBar}>
            <ul>
                <li><a href="/" clasName={styles.item}>
                    ABOUT US<i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/AboutSsua">ssua</Link></li>
                                <li><Link to="/AboutSsunivers">ssunivers</Link></li>
                            </ul>
                </li>
                <li><a href="/" class="item">
                    SHOP <i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/MainStore">All</Link></li>
                                <li><Link to="/Reservation">Reservation</Link></li>
                            </ul>
                </li>
                <li><a href="/" class="item">
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
