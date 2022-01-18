import formStyles from "pages/EditProfile.module.css";
import headTitle from "pages/headTitle.module.css";
import required from "../assets/ico_required_blue.gif";
import {Link} from "react-router-dom";

function Join(){
    return (
        <div>
            <h1 className={headTitle.head}>Join</h1>
            <form action="" 
                  acceptCharset="utf-8" name="personInfo" method="get">
            <table border="0" summary
                className={formStyles.userTable} align="center">
                {/* <caption>회원 기본정보</caption> */}
                    <tbody>
                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                아이디
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id={formStyles.user_id} name="user_id" type="text" required pattern="^([a-z0-9]){4,16}$"/>
                                &nbsp;(영문소문자/숫자, 4~16자)
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                비밀번호
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id={formStyles.user_pw} name="user_pw" type="password" required
                                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$">
                                </input>
                                &nbsp;(영문 대소문자/숫자/특수문자 조합, 8~16자)
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                비밀번호 확인
                                <img src={required} alt="필수"></img>
                            </th> 
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id="user_pw_confirm" name="user_pw_confirm" type="password" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                이름
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id="user_name" name="user_name" type="text" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                휴대전화
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <select id="mobile1" className={formStyles.userMobile}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                &nbsp;-&nbsp;<input className={formStyles.userMobile} id="mobile2" type="text" maxLength="4" pattern="\d*"></input>
                                &nbsp;-&nbsp;<input className={formStyles.userMobile} id="mobile3" type="text" maxLength="4" pattern="\d*"></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                이메일
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id="user_mail" name="user_mail" type="text" required></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/Welcome">
                    <input id={formStyles.userSubmit} type="submit" value="회원가입하기"></input></Link>
                </form>
            
        </div>
    );
}

export default Join;