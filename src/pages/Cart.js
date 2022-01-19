import { useState } from "react";

import headTitle from "pages/headTitle.module.css";
import styles from "pages/Cart.module.css";
import required from "../assets/ico_required_blue.gif";

function Cart(){
    const [pickUp, setPickUp] = useState(false);
    const onSetPickUp = () =>{
        setPickUp((current) => current = true);
    }
    const onSetDelivery = () =>{
        setPickUp((current) => current = false);
    }

    return (
        <div>
            <form acceptCharset="utf-8" 
            name="personInfo" method="post">

            <h1  className={headTitle.head}>Cart</h1>

            <div id={styles.container}>
                <div id={styles.cartMiniTitle}>나의 장바구니 현황</div>

                <table className={styles.cartBox}>
                    <thead className={styles.cartTableHead}>
                        <tr>
                            {/*<th colspan="2">상품번호(Admin)</th>*/}
                            <th >이미지</th>
                            <th >상품명</th>
                            <th >상품가격</th>
                            <th >주문수량</th>
                            <th >할인가격</th>
                            <th >합계</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/*<td colspan="2">0</td>*/}
                            {/*이미지 이름만 저장해서 가져옴*/}
                            <td >0</td>
                            <td >0</td>
                            <td >0</td>
                            <td >0</td>
                            <td >0</td>
                            <td >0</td>
                        </tr>
                    </tbody>
                </table>

                <div className={styles.CouponShippingBox}>
                    <div className={styles.cartTableHead}>쿠폰(Coupon)</div>
                    <form id={styles.check_box}>
                        <select name="">
                        <option value="1"> [필수] 옵션을 선택하세요 </option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                        <option value="4">3</option>
                        </select>
                    </form>
                </div>

                <div className={styles.CouponShippingBox}>
                    <div className={styles.cartTableHead}>수령 방법 선택(Shipping)</div>
                    <div>
                        <input id="mail_receive0" onClick={onSetDelivery} 
                        name="mail_receive" type="radio"></input>
                        <label>배송</label>
                        <input id="mail_receive1" onClick={onSetPickUp} 
                        name="mail_receive" type="radio"></input>
                        <label>방문수령</label>
                    </div>
                </div>

                <div className={styles.addressBox}
                    style={{display: (pickUp)? "" : "none"}}>
                    <table border="0" summary
                    className={styles.addressTable} align="center">
                        <tbody>
                            <tr>
                                <th scope="row" 
                                id={styles.addressTableHead} className={styles.addressTableLine}>
                                    지역 번호
                                    <img src={required} alt="필수"></img>
                                </th>
                                <td id={styles.addressTableData} className={styles.addressTableLine}>
                                <input 
                                name="areaCode" type="text" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row" 
                                id={styles.addressTableHead} className={styles.addressTableLine}>
                                    지역 이름
                                    <img src={required} alt="필수"></img>
                                </th>
                                <td id={styles.addressTableData} className={styles.addressTableLine}>
                                <input 
                                name="areaName" type="text" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row" 
                                id={styles.addressTableHead} className={styles.addressTableLine}>
                                    우편번호
                                    <img src={required} alt="필수"></img>
                                </th>
                                <td id={styles.addressTableData} className={styles.addressTableLine}>
                                <input 
                                name="postCode" type="text" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <div>상품구매금액 7,500 + 배송비 3,000 = 합계 : ₩10,500</div>
                </div>
            </div>

            </form>
        </div>
    );
}

export default Cart;