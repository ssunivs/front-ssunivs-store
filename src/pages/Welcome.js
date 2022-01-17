import headTitle from "pages/headTitle.module.css";
import {Link} from "react-router-dom";

function Welcome(){
    return (
        <div>
            <h1 className={headTitle.head}>Welcome To Ssunivers !</h1>
            <p className={headTitle.head}>슈니버스의 회원이 되신 것을 축하합니다 !</p>
            <Link to="/MainStore">
                <button>쇼핑하러가기</button>
            </Link>
        </div>

    );

}
export default Welcome;