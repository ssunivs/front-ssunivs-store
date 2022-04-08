import { SAVE, DELETE } from "./types";
import axios from "axios";

const initialState = {
    selected: {},
};

const uploadPost = (dataToSave) => {
    axios
        .post("/api/v1/post", {
            title: dataToSave.title,
            content: dataToSave.content,
        })
        .then((response) => {
            alert('"' + response.data.title + '"이(가) 저장되었습니다.');
            window.scrollTo(0, 0);
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
        .then(() => {});
};

const patchPost = (dataToSave, id) => {
    axios
        .patch(`/api/v1/post/${id}`, {
            title: dataToSave.title,
            content: dataToSave.content,
        })
        .then((response) => {
            alert('"' + response.data.title + '"이(가) 수정되었습니다.');
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
        .then(() => {});
};

const deletePost = (id) => {
    axios
        .delete(`/api/v1/post/${id}`)
        .then(alert("게시물이 삭제되었습니다."))
        .catch((error) => {
            alert(error.response.data.message);
        })
        .then(() => {});
};

const boardReducer = (state = initialState, action) => {
    let dataToSave = action.dataToSave;
    let postId = action.postId;
    switch (action.type) {
        case SAVE:
            if (!dataToSave.id) {
                uploadPost(dataToSave);
            }
            if (dataToSave.id) {
                patchPost(dataToSave);
            }
            return { ...state };

        case DELETE:
            if (postId) {
                deletePost(postId);
            }
            if (!postId) {
                alert("게시물이 존재하지 않습니다");
            }
            return { ...state };

        default:
            return state;
    }
};

export default boardReducer;
