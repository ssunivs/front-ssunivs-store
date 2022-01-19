import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import React, {useState} from "react";
import DatePicker,{registerLocale} from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

function Reservation(){
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <button className="example-custom-input" onClick={onClick}>
        {value}
        </button>
    );
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>방문 수령 예약</h1>
            방문가능하신날짜와 시간을 선택해주세요..<br></br>
            방문가능시간 : 평일 1시 ~ 5시<br></br>
            등등 기타사항 ..             
            <DatePicker
            locale={ko}
            selected={startDate}
            onChange={date => setStartDate(date)}
            withPortal
            customInput={<ExampleCustomInput />}
            dateFormat="yyyy년 MM월 dd일 aa h시 mm분"
            minDate={new Date()}
            // popperPlacement="auto"
            showTimeSelect
            timeFormat=" H시 mm분"
            timeIntervals={30}
            />
            방문자 성함 : <input type="text"></input><br></br>
            방문자 연락처 : <input type="text"></input><br></br>
            <button>예약하기</button><br></br>
            예약성공시 넘어가는 페이지 .. 회원 메일로 예약확정메일 보내기 + 변경사항이나 취소 사항이 있을시에 연락드린다는 메세지
        </div>
    );
}

export default Reservation;