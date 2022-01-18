import styles from "pages/MainStore_Product.module.css"; 
import store_set from "assets/store_set.png"

function SsuaDollSet(){
    return(
        <div>
            <img
                className={styles.store_set}
                src={store_set}
                alt="store_product_set" />
            <p className={styles.store_comment}>
                <strong>슈아 인형| 번들 (재학생+졸업생)</strong><br></br>
                <br></br>
                카테고리:품절 태그: 슈니버스, 슈아, 인형, 졸업<br></br>
                <br></br>
                PRICE &emsp;&emsp;&emsp;&emsp;54,000원<br></br>
                <br></br>인형 수량 &emsp;&emsp;&emsp;
                <form id={styles.check_box}>
                <select name="">
                    <option value="1"> [필수] 옵션을 선택하세요 </option>
                    <option value="2">재학생+졸업생</option>
                </select>
            </form>
            </p>
            <form>
                <br></br>
                <input id={styles.store_buy} 
                type="button" value="BUY NOW"></input>
                <br></br> <br></br>
                <input id={styles.store_buy} 
                type="button" value="CART"></input>
            </form>
            <br></br> <br></br> <br></br> <br></br>
            <br></br> <br></br> <br></br> <br></br>
            <hr></hr>
            <input id={styles.store_explain_1} 
            type="button" value="설명"></input>
            <input id={styles.store_explain_2} 
            type="button" value="추가정보"></input>
            <input id={styles.store_explain_3} 
            type="button" value="상품평"></input>

        </div>
    );
}
export default SsuaDollSet;