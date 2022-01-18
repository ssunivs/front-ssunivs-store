import styles from "pages/MainStore_Product.module.css"; 
import store_box from "assets/store_box.png"

function SsuaDollBox(){
    return(
        <div >
            <img
                className={styles.store_box}
                src={store_box}
                alt="store_product_box" />
            <p className={styles.store_comment}>
                <strong>배송료 추가 | 인형 3개 이상</strong><br></br>
                <br></br>
                3개 이상 추가 배송료 결제<br></br>
                <br></br>
                PRICE &emsp;&emsp;&emsp;&emsp;  0원~5,500원<br></br>
                <br></br>인형 수량 &emsp;&emsp;&emsp;
                <form id={styles.check_box}>
                <select name="">
                    <option value="1"> [필수] 옵션을 선택하세요 </option>
                    <option value="2">3-4개</option>
                    <option value="3">5-6개</option>
                    <option value="4">그 이상 구매시 문의</option>
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
            <br></br> <br></br> <br></br>
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
export default SsuaDollBox;