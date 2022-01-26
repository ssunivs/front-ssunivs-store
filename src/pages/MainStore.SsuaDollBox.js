import {React} from "react";
import { useState } from "react";
import styles from "pages/MainStore_Product.module.css"; 
import store_box from "assets/store_box.png"
import Product_comment from "components/Product_comment.js";
import Product_img from "components/Product_img.js";
import Product_review from "components/Product_review.js";

//버튼을 클릭했을 때 각 해당하는 컴포넌트들만 띄울 수 있도록 작업 필요
// react 와 useState를 import 해서 사용해야할 듯
//클릭이 일어났을 때 연결해줄 링크 설정  
// const clickMe =() =>{
//     return( document.location.href('componenets/Product_review'));
// }
function SsuaDollBox(){
    // const clickMe =() =>{
    //     document.location.href("components/Product_comment");
    // }
    return(
        <div>
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

            {/* <Product_comment/>
            <Product_review/>
            <Product_img/> */}

            <button id={styles.store_explain_1} 
            onclick="alert('클릭은 잘 먹나요?')">설명</button>
            <button id={styles.store_explain_1} >추가정보</button>
            <button id={styles.store_explain_1} >상품평</button>
            </div>
    );
}

export default SsuaDollBox;