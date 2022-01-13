import { SET_COLOR_SKY, SET_COLOR_WHITE } from "./types";

const SKY = "#A5D1FC";
const WHITE = "white";

const initialState = {
    backGrondColor : SKY,
    footerColor : WHITE,
    fontColor : WHITE
}

const changeColorReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_COLOR_SKY:
            return{
                ...state,
                backGrondColor : SKY,
                footerColor : WHITE,
                fontColor : WHITE
            }
        
        case SET_COLOR_WHITE:
            return{
                ...state,
                backGrondColor : WHITE,
                footerColor : SKY,
                fontColor : SKY
            }
        default: return state
    }
}

export default changeColorReducer