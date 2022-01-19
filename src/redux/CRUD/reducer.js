import { SAVE, SELECTED, DELETE } from "./types";

const initialState = {
    boards: [
        {
          id: 1, title: '안녕하세요', content: '반갑습니다'
        },
        {
          id: 2, title: 'Hi', content: 'Nice to meet you'
        },
        {
          id: 3, title: '오하요', content: '하지메마시떼'
        },
      ],
    ids: 3, //id 기준, 새로 추가되는 id가 있다면 하나 늘리기
    selected : {} //find함수를 통해서 boards에서 선택된 데이터를 넣을 예정
}

const boardReducer = (state=initialState,action)=>{
    switch(action.type){
        case SAVE:
            if(action.dataToSave.id === ''){
                return {
                  boards: state.boards.concat({...action.dataToSave, id: state.ids + 1}),
                  ids: state.ids + 1,
                  selected: {}
                }
              } else {
                return {...state, boards: state.boards.map(post => 
                    post.id === action.dataToSave.id ? {...action.dataToSave} : "data"), selected: {}}
            }

        case DELETE:
            return {
              ...state, boards: state.boards.filter( post => post.id !== action.postId)
            }
            
        case SELECTED:
            return {
              ...state, selected: state.boards.find(post => post.id === action.postId)
            }
        default: return state
    }
}

export default boardReducer