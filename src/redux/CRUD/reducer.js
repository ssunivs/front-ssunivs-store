import { SAVE, SELECTED, DELETE } from "./types";
// import axios from "axios";

const initialState = {
    boards: [
        {
          id: 1, title: '이벤트 쿠폰 발급',
          content: '이벤트 쿠폰 발급',  division: 'shop',
          writer: '관리자', postDate: '01/25',
        },
        {
          id: 2, title: '주문 결제 방법',
          content: '주문 결제 방법',  division: 'shop',
          writer: '관리자', postDate: '01/25',
        },
        {
          id: 3, title: '배송 안내',
          content: '배송 안내',  division: 'shop',
          writer: '관리자', postDate: '01/25',
        },
        {
          id: 4, title: '주문 변경/취소/환불',
          content: '주문 변경/취소/환불',  division: 'shop',
          writer: '관리자', postDate: '01/25',
        },
        {
          id: 5, title: '제품 교환/반품',
          content: '제품 교환/반품',  division: 'shop',
          writer: '관리자', postDate: '01/25',
        },
      ],
    ids: 5, //ids 빼주기
    selected : {} //find함수를 통해서 boards에서 선택된 데이터를 넣을 예정
}

const boardReducer = (state=initialState,action)=>{
  // axios.get('')
  // // 성공한 경우 실행
  // .then((response) => {
  //   boards = ...response.boards;
  // })
  // // 에러인 경우 실행
  // .catch((error) => {
  //   console.log(error);
  // })
  // // 항상 실행
  // .then(() => {
  // });


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
              post.id === dataToSave.id ? {...dataToSave} : post), selected: {}}

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