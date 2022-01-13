import { connect } from "react-redux";
import { setLogIn, setLogOut } from "./actions";

const logInOut = () => {
    return(
        <div>
            <button onClick={()=>setLogIn()}>Log In</button>
            <button onClick={()=>setLogOut()}>Log Out</button>
        </div>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(logInOut);