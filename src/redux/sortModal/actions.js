import { GET_SORT_LIST, ADD_SORT, DELETE_SORT } from "./types";


export const getSortList = () =>{
    return{
        type: GET_SORT_LIST
    }
}

export const addSort = (dataToAddSort) =>{
    return{
        type: ADD_SORT,
        dataToAddSort: {
            addedSort: dataToAddSort.addedSort
        }
    }
}

export const deleteSort = (dataToDeleteSort) =>{
    return{
        type: DELETE_SORT,
        dataToDeleteSort: {
            deletedSort: dataToDeleteSort.deletedSort
        }
    }
}