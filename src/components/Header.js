import {Link} from "react-router-dom";
import styles from "components/Header.module.css";
import store_logo from "assets/store_logo.png";

function Header(){ //메뉴 로고 mypage,cart
    return (
        <div className={styles.Header}>

            <div>menu</div>

            <Link to="/">
            <img 
            src={store_logo}
            alt="SSUNIVERSE Store main logo" 
            />
            </Link>
            <div>
                <Link to="/MyPage">MyPage</Link>
                <Link to="/Cart">Cart</Link>
            </div>
            
        </div>
    );
}

export default Header;