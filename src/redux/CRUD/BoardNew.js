import RichTextEditor from "./RichTextEditor";

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
                <input type="text" name="title" value={post.title} required
                            placeholder="title" onChange={changeInput}/>
                
                <RichTextEditor />

                <select name="division" 
                    onChange={changeInput} required>
                    <option value="">분류</option>
                    <option>shop</option>
                    <option>ssua</option>
                    <option>etc</option>
                </select>

                <select name="writer"
                    onChange={changeInput} required>
                    <option value="">작성자</option>
                    <option>관리자 F</option>
                    <option>관리자 J</option>
                </select>

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default BoardNew;