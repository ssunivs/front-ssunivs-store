import RichTextEditor from "./RichTextEditor";
import SetAdmin from "redux/setAdmin/SetAdmin";
import styles from "./Board.module.css";

const BoardNew = ({ onSave, changeInput, post, resetForm
                    , adminState }) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        onSave(post);
        resetForm();
    }

    return(
        <div style={{display: (adminState)? "":"none"}}>
            <form onSubmit={onSubmit}>
                <div className={styles.editorElements}>
                    <input type="text" className={styles.editorTitle}
                           name="title" value={post.title} required
                           placeholder="title" onChange={changeInput}/>
                    
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

                <RichTextEditor />
                <div className={styles.editorElements}>
                    <SetAdmin />
                    <button className={styles.noticeButton}
                    type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default BoardNew;