import formStyles from "pages/EditProfile.module.css";
import headTitle from "pages/headTitle.module.css";
import required from "../assets/ico_required_blue.gif";
import {Link} from "react-router-dom";

import { useState } from "react";

import {useDispatch} from 'react-redux';
import { registerUser } from "redux/profile/action";

function Join(){

    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber1, setPhoneNumber1] = useState('');
    const [phoneNumber2, setPhoneNumber2] = useState('');
    const [phoneNumber3, setPhoneNumber3] = useState('');
    const [email, setEmail] = useState('');
    const [receive, consentToReceive] = useState('');
    
    const onChangeId = (e) => {
        setId(e.target.value);
      }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
      }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
      }
    const onChangeName = (e) => {
        setName(e.target.value);
      }
    const onChangePhoneNumber1 = (e) => {
        setPhoneNumber1(e.target.value);
      }
    const onChangePhoneNumber2 = (e) => {
        setPhoneNumber2(e.target.value);
      }
    const onChangePhoneNumber3 = (e) => {
        setPhoneNumber3(e.target.value);
      }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
      }
    const onChangeReceive = (e) => {
        consentToReceive(e.target.value);
      }

    const onSubmit = (e) => {
        e.preventDefault();
      
      if(password !== confirmPassword){
        return alert('입력한 비밀번호가 다릅니다!');
      }
      
      let data = {
        id: id,
        password: password,
        name: name,
        phoneNumber: phoneNumber1 + setPhoneNumber2 + phoneNumber3,
        email: email,
        receive: receive
      };
      
      dispatch(registerUser(data)
        .then(res => {
            if(res.payload.success) {
          } else {
            alert('회원가입에 실패했습니다.');
          }     
        }))
    }

    return (
        <div>
            <h1 className={headTitle.head}>Join</h1>
            <form onSubmit={onSubmit}
                  acceptCharset="utf-8" name="personInfo" method="post">
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
                                <input id={formStyles.user_id} value={id} onChange={onChangeId}
                                name="user_id" type="text" required pattern="^([a-z0-9]){4,16}$"/>
                                &nbsp;(영문소문자/숫자, 4~16자)
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                비밀번호
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id={formStyles.user_pw} value={password} onChange={onChangePassword} 
                                name="user_pw" type="password" required
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
                                <input id="user_pw_confirm" value={confirmPassword} onChange={onChangeConfirmPassword}
                                name="user_pw_confirm" type="password" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                이름
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id="user_name" value={name} onChange={onChangeName}
                                name="user_name" type="text" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                휴대전화
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <select id="mobile1" className={formStyles.userMobile}
                                        value={phoneNumber1} onChange={onChangePhoneNumber1}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                &nbsp;-&nbsp;<input className={formStyles.userMobile} value={phoneNumber2} onChange={onChangePhoneNumber2}
                                id="mobile2" type="text" maxLength="4" pattern="\d*"></input>
                                &nbsp;-&nbsp;<input className={formStyles.userMobile} value={phoneNumber3} onChange={onChangePhoneNumber3}
                                id="mobile3" type="text" maxLength="4" pattern="\d*"></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                이메일
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id="user_mail" name="user_mail" 
                                value={email} onChange={onChangeEmail}type="text" required></input>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id={formStyles.userTableHead} className={formStyles.userTableLine}>
                                이메일 수신 여부
                                <img src={required} alt="필수"></img>
                            </th>
                            <td id={formStyles.userTableData} className={formStyles.userTableLine}>
                                <input id="mail_receive0" name="mail_receive" 
                                value={receive} onChange={onChangeReceive} type="radio"></input>
                                <label>수신함</label>
                                <input id="mail_receive1" name="mail_receive"
                                value={receive} onChange={onChangeReceive} type="radio"></input>
                                <label>수신안함</label>
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