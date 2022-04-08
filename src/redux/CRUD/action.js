import { SAVE, DELETE } from "./types";

export const boardSave = (dataToSave) => {
    return {
        type: SAVE,
        dataToSave: {
            title: dataToSave.title,
            content: dataToSave.content,
            sort: dataToSave.sort,
        },
    };
};

export const boardDelete = (postId) => {
    return {
        type: DELETE,
        postId,
    };
};
