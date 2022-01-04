import {Link} from "react-router-dom";
import styles from "components/GNB.module.css";

function GNB(){ //GNB를 App.js에 놓아야 하나
    return (
        <div className={styles.gnb}>
            <img 
            src="https://www.ssunivs.com/wp-content/uploads/2021/09/home-logo1.png"
            alt="SSUNIVERSE main logo" />
            <Link to="/">Home</Link>
            <Link to="/QnA">QnA</Link>
            <Link to="/Store">Store</Link>
        </div>
    );
}

export default GNB;