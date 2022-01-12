import {Link} from "react-router-dom";

import headTitle from "pages/headTitle.module.css";
import styles from "pages/MyPage.module.css";

function MyPage(){
    return (
        <div>
            <h1 className={headTitle.head}>My Page</h1>

            <div id={styles.container}>
                <button>COUPON</button>

                <div>나의 주문처리 현황 (최근 3개월 기준)</div>

                <table>
                    <thead>
                        <tr>
                            <th colspan="2">배송준비중</th> <th colspan="2">배송중</th> <th colspan="2">배송완료</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">0</td> <td colspan="2">0</td> <td colspan="2">0</td>
                        </tr>
                        <tr>
                            <th>취소</th> <td>0</td>
                            <th>교환</th> <td>0</td>
                            <th>반품</th> <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                    <li>주문조회</li>
                    <Link to="/EditProfile">
                        <li>회원정보</li>
                    </Link>
                    <li>쿠폰</li>
                </ul>
            </div>
        </div>
    );
}

export default MyPage;