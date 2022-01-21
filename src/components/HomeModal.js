import { useState, useEffect } from "react";
import img from "assets/coupon-main.png";
import styles from "components/HomeModal.module.css";
import {Link} from "react-router-dom";

export default function HomeModal() {
//   const [index, setIndex] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);

  const onClickOutside = (e) => {
    if (e.target.localName !== "button") {
      setDisplayModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);
  return (
    <div className="HomeModal">
      <button onClick={() => setDisplayModal(true)}>모달창 버튼</button>
      {displayModal && (
        <div className={styles.modalImg}>
            <Link to="/Notice.1">
            <img src={img} alt="쿠폰발급방법"/>
            </Link> 
        </div>
      )}
    </div>
  );
}