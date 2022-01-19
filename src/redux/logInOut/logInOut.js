import { connect } from "react-redux";
import { setLogIn } from "./actions";

import { Link } from "react-router-dom";

const LogInOut = ({ id, setLogIn }) => {
    return(
        <div>
            <button id = {id} onClick={setLogIn}>
                <Link to="/">
                (임시) 바로 로그인
                </Link>
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        logInState: state.logInOut.logInState
    };
}; 

const mapDispatchToProps = (dispatch)=>{
    return {
        setLogIn: ()=>dispatch(setLogIn())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInOut);