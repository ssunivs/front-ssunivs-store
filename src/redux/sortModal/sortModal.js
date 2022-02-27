import { useState } from "react";

const SortModal = () =>{
    const [show, setShow] = useState(false);
    const handleModalOpen = () =>{
        setShow(true);
    }
    const handleModalClose = () => {
        setShow(false);
      };
    return (
        <div hidden={!show}
             className={}>
            <fieldset>
                <legend>현재</legend>
            </fieldset>

            <form>
                <fieldset>
                    <legend>추가</legend>
                </fieldset>
            </form>

            <form>
                <fieldset>
                    <legend>삭제</legend>
                </fieldset>
            </form>
        </div>
    );
}

export default SortModal;