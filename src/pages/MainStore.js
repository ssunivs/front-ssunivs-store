// 반응형은 아직은 안됩니다... 전체 화면일때만 우선 .....
import styles from "pages/MainStore.module.css";
import store_ssua1 from "assets/store_ssua1.png"; //store이미지
import store_plus from "assets/store_plus.png"; // 원 플러스 원 이미지 
import store_box from "assets/store_box.png" //박스 이미지
import NavBar from "components/NavBar.js";

function MainStore(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br> 
            <h1>Store</h1>
            <p id={styles.store}>슈니버스의 다양한 상품들을 만나보세요.</p>
            <br></br>
            <div className={styles.store_1}>
                <img
                className={styles.store_ssua1}
                src={store_ssua1}
                alt="store_ssua1" />
                <p className={styles.store_doll}>
                    <strong>슈아인형</strong><br></br>
                    <small>낱개</small><br></br>
                    27,000원
                </p>
            </div>

            <div className={styles.store_2}>
                <img
                className={styles.store_plus}
                src={store_plus}
                alt="store_plus" />
                <p className={styles.store_doll}>
                    <strong>슈아인형</strong><br></br>
                    <small>번들 (재학생+졸업생)</small><br></br>
                    54,000원
                </p>
            </div>

            <div className={styles.store_3}>
                <img
                className={styles.store_box}
                src={store_box}
                alt="store_box" />
                <p className={styles.store_doll}>
                    <strong>배송료 추가</strong><br></br>
                    <small>인형 3개 이상</small><br></br>
                    0~5,500원
                </p>
            </div>
        </div>
    );
}

export default MainStore;