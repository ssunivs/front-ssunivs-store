import styles from "pages/LogIn.module.css"
import headTitle from "pages/headTitle.module.css";

import LogInOut from "../redux/logInOut/LogInOut";
import {Link} from "react-router-dom";


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
                <p id={styles.findPW}> 비밀번호찾기</p>
                <br></br>
                <LogInOut id={styles.logInBtn}/>
                <Link to="/Join">
                <input id = {styles.signUpBtn}
                type="button" value="회원가입"></input></Link>
                <br></br>
                <input id = {styles.logInGoogleBtn}
                type="button" value="구글 로그인"></input>
            </form>
        </div>
    );
}

export default LogIn;