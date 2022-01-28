import styles from "pages/Home.module.css";
import main_ssua1 from "assets/main_ssua1.png";
import main_ssua2 from "assets/main_ssua2.png";
import main_ssua3 from "assets/main_ssua3.png";
import coupon_tag from "assets/coupon_tag.png";
// import Modal from "components/HomeModal";

function Home(){
    return (
        <div>
            {/* <Modal /> */}
            <div>
                <img
                title="쿠폰 발급 하러 가기"
                className={styles.couponTag}
                src={coupon_tag}
                alt="coupon_tag">
                </img>
            </div>
            <div  id={styles.home}>
                <img 
                className={styles.mainSsua1}
                src={main_ssua1}
                alt="main_ssua1" 
                />
                <img 
                className={styles.mainSsua2}
                src={main_ssua2}
                alt="main_ssua2" 
                />
                <img 
                className={styles.mainSsua3}
                src={main_ssua3}
                alt="main_ssua3" 
                />
            </div>
        </div>
    );
}

export default Home;

