import {Link} from "react-router-dom";

import headTitle from "pages/headTitle.module.css";
import styles from "pages/MyPage.module.css";

function MyPage(){
    return (
        <div>
            <h1 className={headTitle.head}>My Page</h1>
            <div id={styles.container}>
                <div id={styles.myPageMiniTitle}>나의 주문처리 현황
                    <span id={styles.recentlyThreeMonth}>(최근 3개월 기준)</span>
                </div>
                <table id={styles.stateBox}>
                    <thead>
                        <tr>
                            <th colspan="2">배송준비중</th>
                            <th colspan="2">배송중</th>
                            <th colspan="2">배송완료</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                            <td colspan="2">0</td>
                        </tr>
                        <tr>
                            <th>취소</th><td>0</td>
                            <th>교환</th><td>0</td>
                            <th>반품</th><td>0</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div id={styles.container}>
                <table id={styles.mypageBnt}>
                    <tbody>
                        <tr>
                            <td>Order<br></br>주문내역조회</td>
                            <Link to="/EditProfile">
                            <td>Profile<br></br>회원정보</td>
                            </Link>
                            <Link to="/Coupon">
                            <td>Coupon<br></br>쿠폰</td>
                            </Link>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyPage;