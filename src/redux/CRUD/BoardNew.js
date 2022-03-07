import { useSelector } from "react-redux";
import styles from "./Board.module.css";

//import TextEditor's module
import { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,
         convertToRaw,
         convertFromRaw } from 'draft-js';

import editorStyles from './RichTextEditor.module.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import SortModal from "redux/sortModal/SortModal";

const RichTextEditor = ({ setContent, setPost }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const {selected} = useSelector(state => state.board);
  
  useEffect(() => {
    //기존 값 가져오기
    setPost({
      id: selected.id,
      title: selected.title,
      content: selected.content,
      sort: selected.sort,
      writer: selected.writer,
      postDate: selected.postDate
    });

    const initialEditorState = selected.content
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(selected.content)))
      : EditorState.createEmpty();
      setEditorState(initialEditorState);
      // eslint-disable-next-line
    }, [selected]);
  
    //보낼 값
  const contentRaw = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setContent(contentRaw);
  };

  const styleMap = {
    'customFont': {
      fontFamily: 'sans-serif',
      fontSize: 30
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
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'image', 'remove', 'history'],
            fontFamily: {
              options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana', 'serif', 'Noto Sans KR'],
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
            locale: 'ko',
          }}
          // 초기값 설정
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
       </div>
    );
  };



const BoardNew = ({ onSave, changeInput, setContent, post, resetForm, setPost }) => {
  
    const {selected} = useSelector(state => state.board);

    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    //Detect reviseState
    const {reviseState} = useSelector(state => state.revise);
    if(reviseState){
      post.id = selected.id;
    }

    //React는 input value 초기값 설정시 useState필요
    const [title, setTitle] = useState(reviseState?selected.title:"");
    const onChangeTitle = (e) =>{
      setTitle(e.target.value);
      changeInput(e);
    }

    const onSubmit = (e) =>{
      e.preventDefault();
      onSave(post);
      resetForm();
    }

    return(
        <div style={{display: (adminState)? '':'none'}}>
            <form onSubmit={onSubmit}>
                <div className={styles.editorElements}>
                    <input type="text" className={styles.editorTitle}
                           name="title" value={title} required
                           placeholder='제목'
                           onChange={onChangeTitle}/>
                    
                    <div className={styles.sortPosition}>
                        <select name="sort" className={styles.editorSelects}
                            onChange={changeInput} required>
                            <option value="">분류</option>
                            <option selected={(selected.sort==='shop')? true : false}>shop</option>
                            <option selected={(selected.sort==='ssua')? true : false}>ssua</option>
                            <option selected={(selected.sort==='카테고리')? true : false}>카테고리</option>
                            <option selected={(selected.sort==='etc')? true : false}>etc</option>
                        </select>
                        <SortModal />
                    </div>
                </div>

                <RichTextEditor setContent={setContent} setPost={setPost}/>
                <div className={styles.editorElements}>
                  {/* 작성자는 api 연결 후 다시 */}
                  <select name="writer" className={styles.editorSelects}
                          onChange={changeInput} required>
                          <option value="">작성자</option>
                          <option>관리자 F</option>
                          <option>관리자 J</option>
                  </select>

                  <button className={styles.noticeButton}
                  type="submit">{reviseState? '수정하기' : 'Save'}</button>
                </div>
            </form>
        </div>
    );
}

export default BoardNew;