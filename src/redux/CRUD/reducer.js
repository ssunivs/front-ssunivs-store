import { SAVE, SELECTED, DELETE } from "./types";

const initialState = {
    boards: [
        {
          id: 1, title: '안녕하세요',
          content: '반갑습니다', postDate: new Date()
        },
        {
          id: 2, title: 'Hi',
          content: 'Nice to meet you', postDate: new Date()
        },
        {
          id: 3, title: '오하요',
          content: '하지메마시떼', postDate: new Date()
        },
      ],
    ids: 3, //id 기준, 새로 추가되는 id가 있다면 하나 늘리기
    selected : {} //find함수를 통해서 boards에서 선택된 데이터를 넣을 예정
}

const boardReducer = (state=initialState,action)=>{
  let boards = state.boards;

    switch(action.type){
        case SAVE:
          let dataToSave = action.dataToSave;
          let ids = state.ids;
            if(!dataToSave.id){ //id가 없으면
                return {
                  ids: state.ids + 1,
                  boards: boards.concat({...action.dataToSave, id: ids, postDate: new Date()}),
                  selected: {}
                }
              }
            return {...state, boards: boards.map(post => 
              post.id === action.dataToSave.id ? {...action.dataToSave} : post), selected: {}}

        case DELETE:
            return {
              ...state, boards: boards.filter( post => post.id !== action.postId), selected: {}
            }
            
        case SELECTED:
            return {
              ...state, selected: boards.find(post => post.id === action.postId)
            }
        default: return state
    }
}

export default boardReducer