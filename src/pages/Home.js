import styles from "pages/Home.module.css";
import main_ssua1 from "assets/main_ssua1.png";
import main_ssua2 from "assets/main_ssua2.png";
import main_ssua3 from "assets/main_ssua3.png";
import coupon_tag from "assets/coupon_tag.png";
// import coupon_tag_open from "assets/coupon_tag_open.png";
import coupon_tag2 from "assets/coupon_tag_long.png"; //임시
import click from "assets/click.png";
import { useState } from "react";
// import Modal from "components/HomeModal";
// href='javascript:void(0);'
// onclick="return false;"
function Home(){
    const [open, setOpen] = useState(false);
    const onTagClick = () =>{
        setOpen((current) => !current);
    }
    return (
        <div>
            {/* <Modal /> */}
            <div>
                <img
                className={styles.clickStore}
                src={click}
                alt="click"
                />
            </div>
            <div>
                <a
                // href="https://www.ssunivs.com/2021/09/19/event-coupon/"
                // href="javascript:"
                href={open? "#!" : "https://www.ssunivs.com/2021/09/19/event-coupon/"}
                target={open? "_self" : "_blank"}
                rel="noreferrer"
                >
                <img
                title="쿠폰 발급 하러 가기"
                className={styles.couponTag}
                src={open? coupon_tag2 : coupon_tag} //임시
                alt="coupon_tag"
                onClick={onTagClick}
                />
                </a>
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

