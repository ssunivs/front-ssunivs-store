import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
// {registerLocale}
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import styles from "pages/Reservation.module.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";

import {Link} from "react-router-dom";

function Reservation(){
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6 && day!==5;
    };
    const ExampleCustomInput = ({ value, onClick }) => (
        <button className={styles.reservationDateBnt} onClick={onClick}>
        {value}
        </button>
    );
    var minTime = new Date();
    minTime.setMinutes(0);
    minTime.setHours(9);

    var maxTime = new Date();
    maxTime.setMinutes(0);
    maxTime.setHours(18);
    return (
        <div>
            <br></br>
            <NavBar />
            <h1 className={headTitle.head}>방문수령 예약</h1>
            <p id={styles.reservationNotice}>
            <br></br>
            <form className={styles.reservationForm}
            action=" " name="reservationInfo" method="post">
                <label>
                    <span>성함&nbsp;&nbsp;&nbsp;</span>
                    <input id="rsv_name" name="rsv_name" type="text" required></input>
                </label>
                <hr></hr>
                <label>
                    <span>연락처</span>
                    <input id="rsv_tel" type="tel" name="rsv_tel" pattern="[0-9]+" required></input>
                </label>
                <hr></hr>
                <label>
                    <span>이메일</span>
                    <input id="rsv_email" type="email" name="rsv_email" required></input>
                </label>
                <hr></hr>
                <br></br>
                <p>방문 가능 한 날짜와 시간을 선택해주세요</p>
                    <DatePicker
                    locale={ko}
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    withPortal
                    customInput={<ExampleCustomInput />}
                    dateFormat="yyyy년 MM월 dd일(eee) H시 mm분"
                    minDate={new Date()}
                    // popperPlacement="auto"
                    showTimeSelect
                    timeFormat=" H시 mm분"
                    timeIntervals={15}
                    filterDate={isWeekday}
                    // closeOnScroll={true}
                    minTime={minTime}
                    maxTime={maxTime}
                    // showPopperArrow={false}
                    excludeTimes={[
                        setHours(setMinutes(new Date(), 45), 9),
                        setHours(setMinutes(new Date(), 0), 10),
                        setHours(setMinutes(new Date(), 15), 10),
                        setHours(setMinutes(new Date(), 30), 10),
                        setHours(setMinutes(new Date(), 45), 10),
                        setHours(setMinutes(new Date(), 0), 11),
                        setHours(setMinutes(new Date(), 15), 11),
                        setHours(setMinutes(new Date(), 30), 11),
                        setHours(setMinutes(new Date(), 45), 11),
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 15), 12),
                        setHours(setMinutes(new Date(), 30), 12),
                        setHours(setMinutes(new Date(), 45), 12),
                        setHours(setMinutes(new Date(), 30), 13),
                        setHours(setMinutes(new Date(), 45), 13),
                        setHours(setMinutes(new Date(), 0), 14),
                        setHours(setMinutes(new Date(), 15), 14),
                        setHours(setMinutes(new Date(), 30), 14),
                        setHours(setMinutes(new Date(), 45), 14),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 15), 15),
                        setHours(setMinutes(new Date(), 30), 15),
                        setHours(setMinutes(new Date(), 45), 15),
                        setHours(setMinutes(new Date(), 0), 16),
                        setHours(setMinutes(new Date(), 15), 16),
                        setHours(setMinutes(new Date(), 30), 16),
                        setHours(setMinutes(new Date(), 45), 16),
                        setHours(setMinutes(new Date(), 0), 17)
                    ]}
                />
            <span>유의사항</span>
            <p>배송 메모에 “방문 수령”이라 잘 작성하셨을까요?<br></br>
            10분이상 지각 시 담당자가 기다리지 않을 수 있습니다.<br></br>
            방문에 유의해 주세요🙂<br></br>
            방문 수령 변경 예약은 카카오톡 채널로 문의 바랍니다!
            </p>
            <span>주소</span>
            <p>서울특별시 동작구 상도로55길 8, 304호(상도동, 챌린지스테이션)<br></br>
            </p>
            <label>
            <input id={styles.privacyCheck} type="checkbox" name="rsv_agree" required></input>
            <span id={styles.privacyAgree}>개인정보동의서에 동의합니다.</span>               
            </label>
            <span id={styles.privacyLink}><Link to="/Privacy">(약관보기)</Link></span>
            <br></br>
            
            <button id={styles.reservationFinBnt} type="submit">
                    예약하기</button>
            </form>

            <br></br>
                <a href="https://pf.kakao.com/_JNgis/chat"
                    target="_blank" rel="noreferrer">
                    <button id={styles.reservationOtherTimeBnt}>그 외 시간 문의하기</button></a>
            <br></br>
            </p>

            <iframe title="map" id={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.3384205393681!2d126.95332677111733!3d37.49698945893716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f7df8977be9%3A0xd1c7d78efd30b86e!2z7ISc7Jq47Yq567OE7IucIOuPmeyekeq1rCDsg4Hrj4TroZw1Neq4uCA4!5e0!3m2!1sko!2skr!4v1642742362939!5m2!1sko!2skr"
            allowfullscreen=""
            loading="lazy"></iframe>           
        </div>
    );
}

export default Reservation;

//// 예약성공시 넘어가는 페이지 .. 회원 메일로 예약확정메일 보내기 
// + 변경사항이나 취소 사항이 있을시에 연락드린다는 메세지