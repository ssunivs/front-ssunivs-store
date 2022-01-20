import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import styles from "pages/Notice.module.css";

import Board from "redux/CRUD/Board";

function Notice(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}> NOTICE </h1>
            
            <Board className={styles.notice_table} />
        </div>
    );
}

export default Notice;