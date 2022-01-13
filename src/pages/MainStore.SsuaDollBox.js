import styles from "pages/MainStore_Product.module.css"; 
import store_box from "assets/store_box.png"//박스 이미지 삽입

function SsuaDollBox(){
    return(
        <div>
            <div className={styles.store_product}>
            <img
            className={styles.store_product_box}
            src={store_box}
            align="left"
            alt="store_product_box"/> 박스 이미지 삽입
        <p>
            배송료 추가ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ 인형 3개 추가
        </p>
        </div>
            
            </div>

    );
}
export default SsuaDollBox;