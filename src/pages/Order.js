import headTitle from "pages/headTitle.module.css";
import styles from "pages/Order.module.css";

import Board from "redux/CRUD/Board";

function Order(){
    return (
        <div>
            <h1  className={headTitle.head}>Order</h1>

            <div id={styles.container}>
                <Board />
            </div>
        </div>
    );
}

export default Order;