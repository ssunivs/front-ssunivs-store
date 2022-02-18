import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "redux/setAdmin/actions";

import styles from "pages/LogIn.module.css"
import headTitle from "pages/headTitle.module.css";

function LogIn(){
    const dispatch = useDispatch();

    const onAdmin = (dataToLogIn) => {
        dispatch(setAdmin(dataToLogIn));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdmin(e.target);
    }

    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    // if(adminState){
    //     alert("이미 로그인되어 있습니다.")
    // }

    return (
        <div style={{display: adminState?'none':''}}>
            <h1 className={headTitle.head}>Log In</h1>

            <form id={styles.userLogInForm} onSubmit={onSubmit}>
                <input id ={styles.userID} type="email"
                name='email'placeholder="Email" autofocus required/>
                <br></br>
                <input id ={styles.userPW} type="password"
                name='password' placeholder="Password" autofocus required/>
                <br></br>

                <button type='submit'>로그인</button>
            </form>
        </div>
    );
}

export default LogIn;