import styles from "pages/LogIn.module.css"
import headTitle from "pages/headTitle.module.css";

import SetAdmin from "redux/setAdmin/SetAdmin";


function LogIn(){
    return (
        <div>
            <h1 className={headTitle.head}>Log In</h1>
            <form id={styles.userLogInForm}>
                <input id ={styles.userID}
                type="text" placeholder="ID" autofocus></input>
                <br></br>
                <input id ={styles.userPW}
                type="password" placeholder="Password" autofocus></input>
                {/* <p id={styles.findPW}> 비밀번호찾기</p> */}
                <br></br>
                <SetAdmin />
            </form>
        </div>
    );
}

export default LogIn;