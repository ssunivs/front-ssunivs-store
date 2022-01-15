import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SET_LOGIN, SET_LOGOUT } from "./types";

const persistConfig = {
    key: "root", //어디서부터 저장할지
    storage: storage, //storage 성격에 맞게
    whitelist:["logInState"], //데이터
}

const initialState = {
    logInState : false
}

const logInOutReducer = (state=initialState,action)=>{
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

export default persistReducer(persistConfig, logInOutReducer)