import { connect } from "react-redux";
import { setLogIn, setLogOut } from "./actions";

const LogInOut = ({ id, logInState}) => {
    return(
        <div>
            <button id = {id}
                   style={{display: (logInState)? "none": ""}}
                   onClick={() => setLogIn}>(임시) 바로 로그인
                                            {logInState}</button>
            <button id = {id}
                   style={{display: (logInState)? "": "none"}}
                   onClick={() => setLogOut}>(임시) 바로 로그아웃</button>    
        </div>
    );
};
/*
<input id = {id}
                   style={{display: (logInState)? "none": ""}}
                   onSubmit={() => setLogIn}
                type="submit" value="(임시) 바로 로그인"></input>
            <input id = {id}
                   style={{display: (logInState)? "": "none"}}
                   onSubmit={() => setLogOut}
                type="submit" value="(임시) 바로 로그아웃"></input>    
        </div>
*/
const mapStateToProps = (state) => {
    return{
        logInState: state.logInState
    };
}; 

const mapDispatchToProps = (dispatch)=>{
    return {
        setLogIn: ()=>dispatch(setLogIn),
        setLogOut: ()=>dispatch(setLogOut)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInOut);