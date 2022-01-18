import styles from "pages/MainStore_Product.module.css"; 
import store_ssua1 from "assets/store_ssua1.png"
import store_ssua2 from "assets/store_ssua2.png"
// import product_head from "assets/product_head.png"

// 상품 디테일에 관하여 추가 이미지 첨부 필요
function SsuaDollGoods(){
    return(
        <div>
            <img
                className={styles.store_goods}
                src={store_ssua1}
                alt="store_product_goods" />
                <img
                className={styles.store_ssua2}
                src={store_ssua2}
                alt="store_product_ssua" />
            
                <p className={styles.store_goods_comment}>
                <strong>슈아인형 | 낱개 </strong><br></br>
                <br></br>
                PRICE &emsp;&emsp;  27,000원<br></br>
                <br></br>인형크기 : 20cm <br></br>
                제조원 : (주)기프트앤돌<br></br>
                <br></br><strong>*** 배송비가 3,800원으로 인상되었습니다. *** </strong><br></br>
                <strong>*** 졸업모는 고정이며, 태슬이 추가되었습니다 ! ***</strong><br></br>
                <br></br>의상 선택 &emsp;&emsp;&emsp;
                <form id={styles.check_box}>
                <select name="store">
                    <option value="1"> [필수] 옵션을 선택하세요 </option>
                    <option value="2">졸업생</option>
                    <option value="3">재학생</option>
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
            <br></br>
            <br></br>
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

export default SsuaDollGoods;