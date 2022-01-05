import {Link} from "react-router-dom";
import styles from "components/GNB.module.css";
import store_logo from "assets/store_logo.png";

function GNB(){
    return (
        <div className={styles.gnb}>
            <img 
            src={store_logo}
            alt="SSUNIVERSE main logo" />
            <Link to="/">Home</Link>
            <Link to="/QnA">QnA</Link>
            <Link to="/Store">Store</Link>
        </div>
    );
}

export default GNB;