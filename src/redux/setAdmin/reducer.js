import { SET_ADMIN, SET_OUT_ADMIN } from "./types";
import axios from "axios";

const initialState = {
    adminState : false
}

const setAdminReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_ADMIN:
            let dataToLogIn = action.dataToLogIn;

            axios.post('/api/v1/auth/login', {
                "email": dataToLogIn.email.value,
                "password": dataToLogIn.password.value
            })
            // 성공한 경우 실행
            .then((response) => {
              alert(response.data.username + "님, 환영합니다.");
              window.history.back();
              return{
                ...state,
                adminState: true
              }
            })
            // 에러인 경우 실행
            .catch((error) => {
              alert(error.response.data.message);
              return{
                ...state,
                adminState: false
            }
            })
            // 항상 실행
            .then(() => {});
            return{
                ...state,
                adminState: false //일단 보류
            }
        
        case SET_OUT_ADMIN:
            axios.post('/api/v1/auth/logout')
            // 성공한 경우 실행
            .then(() => {
                return{
                    ...state,
                    adminState: state.adminState = false
                }
            })
            // 에러인 경우 실행
            .catch((error) => {
                alert(error.response.data.message);
            })
            // 항상 실행
            .then(() => {});
            return{
                ...state,
                adminState: false //일단 보류
            }
        default: return state
    }
}

export default setAdminReducer