import { SET_LOGIN, SET_LOGOUT } from "./types";


export const setLogIn = () =>{
    return{
        type: 'SET_LOGIN'
    }
}

export const setLogOut = () =>{
    return{
        type: 'SET_LOGOUT'
    }
}