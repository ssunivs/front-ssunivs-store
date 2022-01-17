import headTitle from "pages/headTitle.module.css";
import styles from "pages/Coupon.module.css";

function Coupon(){
    return (
        <div>
            <h1 className={headTitle.head}>Coupon</h1>
            <table className={styles.couponTable} border="0">
                <thead>
                        <tr className={styles.couponTable}>
                            <th>번호</th>
                            <th>쿠폰</th>
                            <th>발행 날짜</th>
                        </tr> 
                </thead>
                <tbody>
                    <tr className={styles.couponTable}>
                        <td>1</td>
                        <td>인스타 쿠폰 (1000원 할인) </td>
                        <td>2022.01.18</td>
                    </tr>
                </tbody>
            </table>
            <button>쿠폰등록하기</button>
        </div>
    );

}
export default Coupon;