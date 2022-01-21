import styles from "pages/Home.module.css";
import main_ssua1 from "assets/main_ssua1.png";
import main_ssua2 from "assets/main_ssua2.png";
import main_ssua3 from "assets/main_ssua3.png";
import styles1 from "pages/modal.module.css";

function Home(){
    return (
        <div id={styles.home}>
            <button id={styles1.popup_open_btn}>슈니버스 쿠폰 상세 보기</button>
            <div id={styles1.my_modal}>
        슈아 인형에 대한 쿠폰 발급을 원하시면 instagram으로 연락주세요.
        <a class={styles1.modal_close_btn}>닫기</a> </div>
            <script src="Modal.js" ></script>
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
    );
}

export default Home;

