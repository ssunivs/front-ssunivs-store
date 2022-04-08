import { SET_REVISE, UNSET_REVISE } from "./types";

const initialState = {
    reviseState: false,
    idToRevise: 0,
};

const reviseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVISE:
            const postId = action.id;
            return {
                ...state,
                reviseState: true,
                idToRevise: postId,
            };

        case UNSET_REVISE:
            return {
                ...state,
                reviseState: false,
                idToRevise: 0,
            };
        default:
            return state;
    }
};

export default reviseReducer;
