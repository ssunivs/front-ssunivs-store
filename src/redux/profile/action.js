import axios from "axios"
import { REGISTER_USER } from "./types"


export const registerUser = (dataToSubmit) =>{
    const url = "";
    const request = axios.post(url, dataToSubmit)
    .then(response => response.data);

    return{
        type: REGISTER_USER,
        payload : request
    };
};