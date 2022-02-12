import { useSelector } from "react-redux";
import SetAdmin from "redux/setAdmin/SetAdmin";
import styles from "./Board.module.css";

//import TextEditor's module
import { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,
         convertToRaw,
         convertFromRaw } from 'draft-js';

import editorStyles from './RichTextEditor.module.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = ({ setContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const {selected} = useSelector(state => state.board);
  
  useEffect(() => {
    //기존 값 가져오기
    const initialEditorState = selected.content
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(selected.content)))
      : EditorState.createEmpty();
      setEditorState(initialEditorState);
  }, [selected]);
  
    //보낼 값
  const contentRaw = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setContent(contentRaw);
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
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }} 
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
            locale: 'ko',
          }}
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
        <div>{contentRaw}</div>
       </div>
    );
  };



const BoardNew = ({ onSave, changeInput, setContent, post, resetForm }) => {
  
    const {selected} = useSelector(state => state.board);

    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    //Detect reviseState
    const {reviseState} = useSelector(state => state.revise);
    if(reviseState){
      post.id = selected.id;
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
                           name="title" value={post.title} required
                           placeholder={reviseState? selected.title : 'title'}
                           onChange={changeInput}/>
                    
                    <div>
                        <select name="division" className={styles.editorSelects}
                            onChange={changeInput} required>
                            <option value="">분류</option>
                            <option>shop</option>
                            <option>ssua</option>
                            <option>etc</option>
                        </select>

                        <select name="writer" className={styles.editorSelects}
                            onChange={changeInput} required>
                            <option value="">작성자</option>
                            <option>관리자 F</option>
                            <option>관리자 J</option>
                        </select>
                    </div>
                </div>

                <RichTextEditor setContent={setContent}/>
                <div className={styles.editorElements}>
                    <SetAdmin />
                    <button className={styles.noticeButton}
                    type="submit">{reviseState? '수정하기' : 'Save'}</button>
                </div>
            </form>
        </div>
    );
}

export default BoardNew;