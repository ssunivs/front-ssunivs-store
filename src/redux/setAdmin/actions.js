import { SET_ADMIN, SET_OUT_ADMIN } from "./types";


export const setAdmin = (dataToLogIn) =>{
    return{
        type: SET_ADMIN,
        dataToLogIn: {
            email: dataToLogIn.email,
            password: dataToLogIn.password
        }
    }
}

export const setOutAdmin = () =>{
    return{
        type: SET_OUT_ADMIN
    }
}