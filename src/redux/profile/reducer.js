import { REGISTER_USER } from "./types"

export default function joinReducer(state={}, action) {
  switch(action.type) {
    case REGISTER_USER:
      return {
          ...state, 
        register: action.payload} 
    default: 
      return state; 
  }
}