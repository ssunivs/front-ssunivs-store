import headTitle from "pages/headTitle.module.css";
import styles from "pages/EditProfile.module.css";
import required from "../assets/ico_required_blue.gif";

function EditProfile(){
    /* 비밀번호 같은지 확인하는거.. */
    return (
        <div id={styles.container}>
            <h1 className={headTitle.head}>회원 정보 수정</h1>
            <form>
            <table border="0" summary
                className={styles.userTable} align="center">
                {/* <caption>회원 기본정보</caption> */}
                    <tbody>
                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                아이디
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <input id={styles.user_id} name="user_id" type="text" required pattern="^([a-z0-9]){4,16}$"/>
                                &nbsp;(영문소문자/숫자, 4~16자)
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                비밀번호
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <input id={styles.user_pw} name="user_pw" type="password" required
                                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$">
                                </input>
                                &nbsp;(영문 대소문자/숫자/특수문자 조합, 8~16자)
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                비밀번호 확인
                                <img src={required} alt="필수"></img>
                            </th> 
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <input id="user_pw_confirm" name="user_pw_confirm" type="password" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                이름
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <input id="user_name" name="user_name" type="text" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                휴대전화
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <select id="mobile1" className={styles.userMobile}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                &nbsp;-&nbsp;<input className={styles.userMobile} id="mobile2" type="text" maxLength="4" pattern="\d*"></input>
                                &nbsp;-&nbsp;<input className={styles.userMobile} id="mobile3" type="text" maxLength="4" pattern="\d*"></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                이메일
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <input id="user_mail" name="user_mail" type="text" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={styles.userTableHead} className={styles.userTableLine}>
                                이메일 수신 여부
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={styles.userTableData} className={styles.userTableLine}>
                                <input id="mail_receive0" name="mail_receive" type="radio"></input>
                                <label>수신함</label>
                                <input id="mail_receive1" name="mail_receive" type="radio"></input>
                                <label>수신안함</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    <input id={styles.userSubmit} type="submit" value="회원정보수정"></input>
                </form>
        </div>

        
    );
}

export default EditProfile;