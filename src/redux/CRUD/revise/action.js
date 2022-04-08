import { SET_REVISE, UNSET_REVISE } from "./types";

export const setRevise = (postId) => {
    return {
        id: postId,
        type: SET_REVISE,
    };
};

export const unsetRevise = () => {
    return {
        type: UNSET_REVISE,
    };
};
