import { SAVE, SELECTED, DELETE } from "./types";

const initialState = {
    boards: [
        {
          id: 1, title: '이벤트 쿠폰 발급',
          content: '이벤트 쿠폰 발급',  division: 'shop',
          writer: '관리자', postDate: new Date(),
        },
        {
          id: 2, title: '주문 결제 방법',
          content: '주문 결제 방법',  division: 'shop',
          writer: '관리자', postDate: new Date(),
        },
        {
          id: 3, title: '배송 안내',
          content: '배송 안내',  division: 'shop',
          writer: '관리자', postDate: new Date(),
        },
        {
          id: 4, title: '주문 변경/취소/환불',
          content: '주문 변경/취소/환불',  division: 'shop',
          writer: '관리자', postDate: new Date(),
        },
        {
          id: 5, title: '제품 교환/반품',
          content: '제품 교환/반품',  division: 'shop',
          writer: '관리자', postDate: new Date(),
        },
      ],
    ids: 5, //id 기준, 새로 추가되는 id가 있다면 하나 늘리기
    selected : {} //find함수를 통해서 boards에서 선택된 데이터를 넣을 예정
}

const boardReducer = (state=initialState,action)=>{
  let boards = state.boards;

    switch(action.type){
        case SAVE:
          let dataToSave = action.dataToSave;
          let ids = state.ids;
            if(!dataToSave.id){ //id가 없으면
              console.log(dataToSave);
                return {
                  ids: state.ids + 1,
                  boards: boards.concat({...action.dataToSave, id: ids + 1,
                          title: dataToSave.title, postDate: new Date()}),
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