import { SAVE, SELECTED, DELETE, UNSELECTED } from "./types";


export const boardSave = (dataToSave) =>{
    return{
        type: SAVE,
        dataToSave: {
            id: dataToSave.id, //고유 id
            title: dataToSave.title,
            content: dataToSave.content,
            division: dataToSave.division,
            writer: dataToSave.writer,
            postDate: dataToSave.postDate
          }
    }
}

export const boardDelete = (postId) =>{
    return{
        type: DELETE,
        postId
    }
}

export const boardSelected = (postId) =>{
    return{
        type: SELECTED,
        postId
    }
}

export const boardUnSelected = (postId) =>{
    return{
        type: UNSELECTED,
        postId
    }
}