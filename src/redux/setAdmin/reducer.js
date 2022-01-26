import { SET_ADMIN, SET_OUT_ADMIN } from "./types";

const initialState = {
    adminState : false
}

const setAdminReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_ADMIN:
            return{
                ...state,
                adminState: state.adminState = true
            }
        
        case SET_OUT_ADMIN:
            return{
                ...state,
                adminState: state.adminState = false
            }
        default: return state
    }
}

export default setAdminReducer