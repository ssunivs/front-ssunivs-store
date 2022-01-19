const List = ({ id, title, content, onDelete, postClickHandler,
                onSave, changeInput, post, resetForm }) => {
    return(
        <div>
            <div>
            {id}s/{title}/{content}/{onDelete}/{postClickHandler}
            </div>
            <div>
            {onSave}/{changeInput}/{post}/{resetForm}
            </div>
        </div>
        
    );
};


export default List;