import { SET_ADMIN, SET_OUT_ADMIN } from "./types";


export const setAdmin = () =>{
    return{
        type: SET_ADMIN
    }
}

export const setOutAdmin = () =>{
    return{
        type: SET_OUT_ADMIN
    }
}