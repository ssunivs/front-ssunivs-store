import { SET_LOGIN, SET_LOGOUT } from "./types";

const initialState = {
    logInState : false
}

const logInOutReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_LOGIN:
            return{
                ...state,
                logInState: state.logInState = true
            }
        
        case SET_LOGOUT:
            return{
                ...state,
                logInState: state.logInState = false
            }
        default: return state
    }
}

export default logInOutReducer