import { Button, ButtonToolbar } from 'react-bootstrap';
import styles from "pages/LogIn.module.css";

function LogIn(){
    return (
        <div>
            <h1>Log In</h1><br></br>
            <div className={styles.logInBox}>
                <input id={styles.idBox}  type="text" class="form-control" placeholder="ID" aria-describedby="basic-addon1"/>
            </div>
            
            <div className={styles.logInBox}>
                <input id={styles.passwordBox} type="text" class="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
            </div>
                <p>비밀번호 찾기</p>
            <br></br>
            <ButtonToolbar>
                <Button variant="primary">로그인</Button>
                <Button variant="secondary">회원가입</Button>
                {/* <Button variant="success">네이버 로그인</Button>
                <Button variant="warning">카카오 로그인</Button> */}
                {/* <Button variant="info">Info</Button>
                <Button variant="light">Light</Button> */}
            </ButtonToolbar><br></br>
            <ButtonToolbar>
                <Button variant="dark">구글 로그인</Button>
            </ButtonToolbar>
        </div>
    );
}

export default LogIn;