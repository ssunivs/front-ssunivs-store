import styles from "pages/LogIn.module.css"
import headTitle from "pages/headTitle.module.css";
import logInOut from "redux/logInOut/logInOut";

function LogIn(){
    console.log(logInOut.type);
    return (
        <div>
            <h1 className={headTitle.head}>Log In</h1>
            <form id={styles.userLogInForm}>
                <input id ={styles.userID}
                type="text" placeholder="ID" value="" autofocus></input>
                <br></br>
                <input id ={styles.userPW}
                type="text" placeholder="Password" value="" autofocus></input>
                <p id={styles.findPW}> 비밀번호찾기</p>
                <br></br>
                <logInOut id={styles.logInBtn}/>
                <input id = {styles.signUpBtn}
                type="button" value="회원가입"></input>
                <br></br>
                <input id = {styles.logInGoogleBtn}
                type="button" value="구글 로그인"></input>
            </form>
        </div>
    );
}
/*<input id = {styles.logInBtn}
type="submit" value="로그인"></input>*/

export default LogIn;