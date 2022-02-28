import { GET_SORT_LIST, ADD_SORT, DELETE_SORT } from "./types";
import axios from "axios";

const initialState = {
    sortList : []
}

const handleModalReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_SORT_LIST:
            axios.post('')
            // 성공한 경우 실행
            .then((response) => {
              return{
                ...state,
                sortList: response.data.sortList
              }
            })
            // 에러인 경우 실행
            .catch((error) => {
              alert(error.response.data.message);
              return{
                ...state
              }
            })
            // 항상 실행
            .then(() => {});
            return{
                ...state
            }
        
        case ADD_SORT:
            axios.post('', {
                "addedSort": action.dataToAddSort.addedSort.value
            })
            // 성공한 경우 실행
            .then((response) => {
              return{
                ...state,
                sortList: response.data.sortList
              }
            })
            // 에러인 경우 실행
            .catch((error) => {
              alert(error.response.data.message);
              return{
                ...state
              }
            })
            // 항상 실행
            .then(() => {});
            return{
                ...state
            }

        case DELETE_SORT:
            // axios.delete('', {
            //     "addedSort": action.dataToAddSort.addedSort.value
            // })
            // // 성공한 경우 실행
            // .then((response) => {
            //   return{
            //     ...state,
            //     sortList: response.data.sortList
            //   }
            // })
            // // 에러인 경우 실행
            // .catch((error) => {
            //   alert(error.response.data.message);
            //   return{
            //     ...state
            //   }
            // })
            // // 항상 실행
            // .then(() => {});
            return{
                ...state
            }
        default: return state
    }
}

export default handleModalReducer