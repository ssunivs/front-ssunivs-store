import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
// {registerLocale}
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import styles from "pages/Reservation.module.css";
import userForm from "pages/EditProfile.module.css"

function Reservation(){
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <button className={styles.reservationDateBnt} onClick={onClick}>
        {value}
        </button>
    );
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>방문 수령 예약</h1>
            <p id={styles.reservationNotice}>
            <br></br>
            방문가능시간 : 평일 1시 ~ 5시<br></br>
            등등 기타사항 ..   <br></br><br></br>

            방문자 성함 :&nbsp;&nbsp;
            <input id="user_name" name="user_name" type="text" required></input>
            <br></br>
            방문자 연락처 : &nbsp;&nbsp;
            <select id="mobile1" className={userForm.userMobile}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                                &nbsp;-&nbsp;<input className={userForm.userMobile} id="mobile2" type="text" maxLength="4" pattern="\d*"></input>
                                &nbsp;-&nbsp;<input className={userForm.userMobile} id="mobile3" type="text" maxLength="4" pattern="\d*"></input>
            <br></br>
            <br></br>
            <span>방문 가능 한 날짜와 시간을 선택해주세요</span>
            <DatePicker
            locale={ko}
            selected={startDate}
            onChange={date => setStartDate(date)}
            withPortal
            customInput={<ExampleCustomInput />}
            dateFormat="yyyy년 MM월 dd일 H시 mm분"
            minDate={new Date()}
            // popperPlacement="auto"
            showTimeSelect
            timeFormat=" H시 mm분"
            timeIntervals={30}
            />
            <button id={styles.reservationFinBnt}>예약하기</button>
            <br></br>
            <br></br>
            </p>           
        </div>
    );
}

export default Reservation;

//// 예약성공시 넘어가는 페이지 .. 회원 메일로 예약확정메일 보내기 
// + 변경사항이나 취소 사항이 있을시에 연락드린다는 메세지