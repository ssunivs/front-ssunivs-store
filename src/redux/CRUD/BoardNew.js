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
                <input type="text" name="division" value={post.division} required
                            placeholder="division" onChange={changeInput}/>
                <input type="text" name="writer" value={post.writer} required
                            placeholder="writer" onChange={changeInput}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default BoardNew;