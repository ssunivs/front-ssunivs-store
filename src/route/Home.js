import arrow from "images/arrow.png";
import styles from "route/arrow.module.css";

function Home(){
    return (
        <div>
            <img src={arrow} 
            alt="arrow"
            className={styles.arrow}
            />
            <div>Home</div>
            <img src={arrow} 
            alt="arrow"
            className={styles.flippedArrow}
            trasnform="scaleY(-1)"
            />
            <div></div>
        </div>
    );
}

export default Home;