import { SAVE, SELECTED, DELETE, UNSELECTED } from "./types";
import axios from "axios";

const initialState = {
    boards: [
      ],
    ids: 5, //ids 빼주기
    selected : {} //find함수를 통해서 boards에서 선택된 데이터를 넣을 예정
}

const axiosPost = (dataToSave) => {

  axios.post('/api/v1/post',
  {
    "title": dataToSave.title,
    "content": dataToSave.content
  })
  // 성공한 경우 실행
  .then((response) => {
    console.log(response.data);
  })
  // 에러인 경우 실행
  .catch((error) => {
    alert(error.response.data.message);
  })
  // 항상 실행
  .then(() => {});
}

const boardReducer = (state=initialState,action)=>{

  let boards = state.boards;

  const saveRawDate = new Date();
  const saveDate = (saveRawDate.getMonth()+1).toString().padStart(2,'0')
                  +'/'
                  +saveRawDate.getDate().toString().padStart(2,'0')

    switch(action.type){
        case SAVE: //저장할 때 날짜랑 id빼주기
          let dataToSave = action.dataToSave;
          let ids = state.ids;
            if(!dataToSave.id){ //id가 없으면
              axiosPost(dataToSave);
                return {
                  ids: ids + 1,
                  boards: boards.concat({...dataToSave, id: ids + 1,
                          title: dataToSave.title, content: dataToSave.content, 
                          postDate: saveDate, division: dataToSave.division,
                          writer: dataToSave.writer}),
                  // boards: boards.concat({...dataToSave, })
                  
                  selected: {}
                }
              }
            return {...state, boards: boards.map(post =>
              post.id === dataToSave.id ? {...dataToSave, postDate: saveDate} : post), selected: {}}

        case DELETE:
              return {
                ...state, boards: boards.filter( post => post.id !== action.postId), selected: {}
              }
            
        case SELECTED:
            return {
              ...state, selected: boards.find(post => post.id === action.postId)
            }

        case UNSELECTED:
            return {
              ...state, selected: {}
            }
        default: return state
    }
}

export default boardReducer