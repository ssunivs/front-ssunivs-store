import headTitle from "pages/headTitle.module.css";
import styles from "pages/Cart.module.css";

function Cart(){
    return (
        <div>
            <h1  className={headTitle.head}>Cart</h1>

            <div id={styles.container}>
                <table className={styles.cartBox}>
                    <thead className={styles.cartTitle}>
                        <tr>
                            <th colspan="2">상품번호(Admin)</th>
                            <th colspan="2">이미지</th>
                            <th colspan="2">상품명</th>
                            <th colspan="2">상품가격</th>
                            <th colspan="2">주문수량</th>
                            <th colspan="2">할인가격</th>
                            <th colspan="2">합계</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                        </tr>
                    </tbody>
                </table>

                <div className={styles.cartBox}>
                    <div className={styles.cartTitle}>쿠폰(Coupon)</div>

                </div>

                <div className={styles.cartBox}>
                    <div className={styles.cartTitle}>수령 방법 선택(Shipping)</div>
                    <div>방문수령(라디오버튼)</div>

                </div>

                <div>
                    <div>상품구매금액 7,500 + 배송비 3,000 = 합계 : ₩10,500</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;