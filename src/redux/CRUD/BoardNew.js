import { useSelector } from "react-redux";
import styles from "./Board.module.css";
import axios from "axios";

//import TextEditor's module
import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";

import editorStyles from "./RichTextEditor.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import SortModal from "redux/sortModal/SortModal";

const RichTextEditor = ({ setContent, content }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const initialEditorState = content
            ? EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
            : EditorState.createEmpty();
        setEditorState(initialEditorState);
    }, [content]);

    //보낼 값
    const contentRaw = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        setContent(contentRaw);
    };

    const styleMap = {
        customFont: {
            fontFamily: "sans-serif",
            fontSize: 30,
        },
    };

    return (
        <div>
            <Editor
                // 에디터와 툴바 모두에 적용되는 클래스
                wrapperClassName={editorStyles.wrapperClass}
                // 에디터 주변에 적용된 클래스
                editorClassName={editorStyles.editor}
                // 툴바 설정
                toolbar={{
                    options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                        "list",
                        "textAlign",
                        "colorPicker",
                        "link",
                        "emoji",
                        "image",
                        "remove",
                        "history",
                    ],
                    fontFamily: {
                        options: [
                            "Arial",
                            "Georgia",
                            "Impact",
                            "Tahoma",
                            "Times New Roman",
                            "Verdana",
                            "serif",
                            "Noto Sans KR",
                        ],
                    },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: false },
                }}
                customStyleMap={styleMap}
                placeholder="내용을 작성해주세요.(Shift + Enter를 사용하셔야 여러 개행이 됩니다.)"
                // 한국어 설정
                localization={{
                    locale: "ko",
                }}
                // 초기값 설정
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
};

const BoardNew = ({ onSave, changeInput, setContent, post, writeMode }) => {
    //Detect AdminMode
    const { adminState } = useSelector((state) => state.adminMode);
    //Detect reviseState
    const { reviseState } = useSelector((state) => state.revise);
    const { idToRevise } = useSelector((state) => state.revise);
    if (reviseState) {
        post.id = idToRevise;
    }

    const [getPost, setGetPost] = useState({});
    //React는 input value 초기값 설정시 useState필요
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (idToRevise !== 0) {
            axios
                .get(`/api/v1/post/${idToRevise}`)
                .then((response) => {
                    setGetPost(response.data);
                    setTitle(response.data.title);
                })
                .catch((error) => {
                    alert(error.response.data.message);
                });
        }
        // eslint-disable-next-line
    }, []);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
        changeInput(e);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSave(post);
    };

    useEffect(() => {
        if (!writeMode || !reviseState) {
            setTitle("");
            setGetPost({});
        }
    }, [writeMode, reviseState]);

    return (
        <div style={{ display: adminState ? "" : "none" }}>
            {(!reviseState || getPost?.id) && (
                <>
                    <form onSubmit={onSubmit}>
                        <div className={styles.editorElements}>
                            <input
                                type="text"
                                className={styles.editorTitle}
                                name="title"
                                value={title}
                                required
                                placeholder="제목"
                                onChange={onChangeTitle}
                            />

                            <div className={styles.sortPosition}>
                                <select
                                    name="sort"
                                    className={styles.editorSelects}
                                    onChange={changeInput}
                                    required
                                >
                                    <option value="">분류</option>
                                    <option selected={getPost.sort === "shop" ? true : false}>
                                        shop
                                    </option>
                                    <option selected={getPost.sort === "ssua" ? true : false}>
                                        ssua
                                    </option>
                                    <option selected={getPost.sort === "카테고리" ? true : false}>
                                        카테고리
                                    </option>
                                    <option selected={getPost.sort === "etc" ? true : false}>
                                        etc
                                    </option>
                                </select>
                                <SortModal />
                            </div>
                        </div>

                        <RichTextEditor setContent={setContent} content={getPost.content} />
                        <div className={styles.editorElements}>
                            <div>(임시) 작성자 : test-user</div>
                            <button className={styles.noticeButton} type="submit">
                                {reviseState ? "수정하기" : "Save"}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default BoardNew;
