import { SET_REVISE, UNSET_REVISE } from "./types";

const initialState = {
    reviseState: false
}

const reviseReducer = (state=initialState,action)=>{
  
    switch(action.type){
        case SET_REVISE:
            return {
              ...state,
              reviseState: true
            }

        case UNSET_REVISE:
            return {
              ...state,
              reviseState: false
            }
        default: return state
    }
}

export default reviseReducer