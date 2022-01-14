import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";

function Reservation(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>방문 수령 예약</h1>
        </div>
    );
}

export default Reservation;