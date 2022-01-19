import { SAVE, SELECTED, DELETE } from "./types";


export const boardSave = (dataToSave) =>{
    return{
        type: SAVE,
        dataToSave: {
            id: dataToSave.id,
            title: dataToSave.title,
            content: dataToSave.content
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