import { SHOW_MODAL, HIDE_MODAL, REVERSE_MODAL } from "./types";


export const showModal = () =>{
    return{
        type: SHOW_MODAL
    }
}

export const hideModal = () =>{
    return{
        type: HIDE_MODAL
    }
}

export const reverseModal = () =>{
    return{
        type: REVERSE_MODAL
    }
}