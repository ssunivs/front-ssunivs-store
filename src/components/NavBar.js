import styles from "components/NavBar.module.css"
import {Link} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi"

function NavBar (){
    return (
        <div id={styles.navBar}>
            <ul>
                <li><a href="/News">
                    ABOUT US<i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/News">News</Link></li>
                                <li><Link to="/AboutSsua">ssua</Link></li>
                                <li><Link to="/AboutSsunivers">ssunivers</Link></li>
                            </ul>
                </li>
                <li><a href="/Notice">
                    BOARD <i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/Notice">Notice</Link></li>
                            </ul>
                </li>
                <li><a href="/Contact">
                    CONTACT<i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/Contact">Conatct Us</Link></li>
                                <li><Link to="/Reservation">Reservation</Link></li>
                            </ul>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;
