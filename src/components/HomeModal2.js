import React, {useState} from "react";
import styles from "components/HomeModal2.module.css";
import img from "assets/coupon_img.png";
import coupon_tag from "assets/coupon_tag.png";

export default function HomeModal2() {
  const [show, setShow] = useState(false);
  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === "modalCard") {
      return;
    }
    document.body.style.overflow = "visible";
    setShow(false);
  };
  
  const handleModalOpen = () => {
    setShow(true);
    document.body.style.overflow = "hidden";
  };
  
  return (
    <div>
      <div
        hidden={!show}  
      >
        <div
          className={styles.modalBackground}
          onClick={handleModalClose}
        >
          <div className={styles.modalCard}>
          <a
            href="https://www.ssunivs.com/2021/09/19/event-coupon/"
            target="_blank"
            rel="noreferrer"
            >
            <img className={styles.couponImg} src={img} alt="쿠폰발급방법"/> 
            </a>
          </div>
        </div>
      </div>
        <img
                      title="쿠폰 발급 하러 가기"
                      className={styles.couponTag}
                      src={coupon_tag}
                      alt="coupon_tag"
                      onClick={handleModalOpen}
          />
    </div>
  );
}