import {Link} from "react-router-dom";
import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import styles from "pages/Notice.module.css";

function Notice(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}> NOTICE </h1>
            <table className={styles.notice_table}
            border="0">
                <thead>
                    <tr className={styles.notice_table}>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr className={styles.notice_table}>
                        <td>shop</td>
                        <Link to="/Notice.Event"><td>이벤트 쿠폰 발급</td>
                        </Link>
                        <td>관리자</td>
                    </tr>
                    <tr className={styles.notice_table}>
                        <td>shop</td>
                        <Link to="/Notice.Payment"><td>주문 결제 방법</td>
                        </Link>
                        <td>관리자</td>
                    </tr>

                    <tr className={styles.notice_table}>
                        <td>shop</td>
                        <Link to="/Notice.Deliver"><td>배송 안내</td>
                        </Link>
                        <td>관리자</td>
                    </tr>
                    <tr className={styles.notice_table}>
                        <td>shop</td>
                        <Link to="/Notice.Exchange">
                        <td>주문 변경/취소/환불</td>
                        </Link>
                        <td>관리자</td>
                    </tr>

                    <tr className={styles.notice_table}>
                        <td>shop</td>
                        <Link to="/Notice.Refund">
                        <td>제품 교환/반품</td>
                        </Link>
                        <td>관리자</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Notice;