import { connect } from "react-redux";
import { setLogIn, setLogOut } from "./actions";

const LogInOut = ({ id, logInState, setLogIn, setLogOut}) => {
    return(
        <div>
            <button id = {id}
                   style={{display: (logInState)? "none": ""}}
                   onClick={setLogIn}>(임시) 바로 로그인
                                            {logInState}</button>
            <button id = {id}
                   style={{display: (logInState)? "": "none"}}
                   onClick={setLogOut}>(임시) 바로 로그아웃</button>    
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
        setLogIn: ()=>dispatch(setLogIn()),
        setLogOut: ()=>dispatch(setLogOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInOut);