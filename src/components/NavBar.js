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
                                {/* <li><Link to="/News">News</Link></li> */}
                                <li><Link to="/AboutSsua">ssua</Link></li>
                                <li><Link to="/AboutSsunivers">ssuniverse</Link></li>
                            </ul>
                </li>
                <li><a href="https://www.ssunivs.com/">
                    STORE <i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><a href="https://www.ssunivs.com/">GO !</a></li>
                                <li><Link to="/Reservation">방문수령 예약</Link></li>
                            </ul>
                </li>
                <li><a href="/Contact">
                    BOARD<i><BiChevronDown /></i></a>
                        <span className={styles.accent}></span>
                            <ul className={styles.dropdown}>
                                <li><Link to="/Notice">Notice</Link></li>
                                <li><Link to="/FAQ">자주 묻는 질문</Link></li>
                            </ul>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;
