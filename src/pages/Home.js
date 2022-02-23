import styles from "pages/Home.module.css";
import main_ssua1 from "assets/main_ssua1.png";
import main_ssua2 from "assets/main_ssua2.png";
import main_ssua3 from "assets/main_ssua3.png";
import click from "assets/click.png"; //수정
// import Modal from "components/HomeModal";
import Modal from "components/HomeModal2";


function Home(){
    
    return (
        <div>
            <div>
                <img
                className={styles.clickStore}
                src={click}
                alt="click"
                />
            </div>
            {/* <Modal /> */}
            <div id={styles.home}>
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
            <div>
                <Modal />
            </div>
        </div>
    );
}

export default Home;

