import { SAVE, SELECTED, DELETE, UNSELECTED } from "./types";


export const boardSave = (dataToSave) =>{
    return{
        type: SAVE,
        dataToSave: {
            title: dataToSave.title,
            content: dataToSave.content,
            sort: dataToSave.sort
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