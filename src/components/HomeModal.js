import { useState, useEffect } from "react";
import img from "assets/coupon_img.png";
import styles from "components/HomeModal.module.css";
// import {Link} from "react-router-dom";
import coupon_tag from "assets/coupon_tag.png";
import coupon_tag2 from "assets/coupon_tag_long.png";

export default function HomeModal() {
  // const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const onTagClick = () =>{
      setOpen((current) => !current);
  }

  const [displayModal, setDisplayModal] = useState(false);

  const onClickOutside = (e) => {
    if (e.target.localName !== "img") {
      setDisplayModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className="HomeModal">
      <div  onClick={onTagClick}>
          <img
                      title="쿠폰 발급 하러 가기"
                      className={styles.couponTag}
                      src={open? coupon_tag2 : coupon_tag} //임시
                      alt="coupon_tag"
                      onClick={() => setDisplayModal(true)}
          />
      </div>
        {/* <img
                    title="쿠폰 발급 하러 가기"
                    className={styles.couponTag}
                    src={coupon_tag} 
                    alt="coupon_tag"
                    onClick={() => setDisplayModal(true)}
        /> */}
      {displayModal && (
        <div className={styles.modalImg}>
          <a
            href="https://www.ssunivs.com/2021/09/19/event-coupon/"
            target="_blank"
            rel="noreferrer"
            >
            <img src={img} alt="쿠폰발급방법"/> 
            </a>
        </div>
      )}
    </div>
  );
}