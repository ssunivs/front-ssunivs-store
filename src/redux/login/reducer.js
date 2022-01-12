import { SET_LOGIN, SET_LOGOUT } from "./types";

const initialState = {
    logInState : False
}

const logInReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_LOGIN:
            return{
                ...state,
                logInState: !state.logInState
            }
        
        case SET_LOGOUT:
            return{
                ...state,
                logInState: !state.logInState
            }
        default: return state
    }
}

export default logInReducer