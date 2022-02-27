import { SHOW_MODAL, HIDE_MODAL, REVERSE_MODAL } from "./types";

const initialState = {
    modalState : false
}

const handleModalReducer = (state=initialState,action)=>{
    switch(action.type){
        case SHOW_MODAL:
            return{
                ...state,
                modalState: true
            }
        
        case HIDE_MODAL:
            return{
                ...state,
                modalState: false
            }

        case REVERSE_MODAL:
            return{
            ...state,
            modalState: !state
        }
        default: return state
    }
}

export default handleModalReducer