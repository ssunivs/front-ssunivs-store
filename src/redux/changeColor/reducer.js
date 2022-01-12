import { SET_COLOR_SKY, SET_COLOR_WHITE } from "./types";

const initialState = {
    backGrondColor : "#A5D1FC",
    fontColor : "white"
}

const changeColorReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_COLOR_SKY:
            return{
                ...state,
                backGrondColor: "A5D1FC",
                fontColor: "white"
            }
        
        case SET_COLOR_WHITE:
            return{
                ...state,
                backGrondColor: "white",
                fontColor: "#2C2C2C"
            }
        default: return state
    }
}

export default changeColorReducer