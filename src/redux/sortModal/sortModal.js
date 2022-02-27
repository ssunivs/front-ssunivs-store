import { useState } from "react";

import styles from "./SortModal.module.css";

const SortModal = () =>{
    const [show, setShow] = useState(false);
    const handleSortModalOpen = () =>{
        setShow(true);
        //Limit using scroll
        document.body.style.overflow = "hidden";
    }
    const handleSortModalClose = () => {
        setShow(false);
        document.body.style.overflow = "visible";
      };

    return (
        <div>
         <div hidden={!show}>
          <div id={styles.modalBackground}
               onClick={handleSortModalClose}>

             <div id={styles.modalContainer}
                  onClick={e => e.stopPropagation()}>
              <h3>Sort 그룹관리</h3>
               <fieldset>
                <legend>현재</legend>
                 <div>sortList 영역</div>
               </fieldset>

              <form><fieldset>
               <legend>추가</legend>
                <input type="text"
                       name="addedSort" required/>
              </fieldset></form>

              <form><fieldset>
               <legend>삭제</legend>
                <input type="text"
                       name="DeletedSort" required/>
              </fieldset></form>
             </div>

          </div>
         </div>
            <button type="button"
                    style={{fontSize: "11px"}}
                    onClick={handleSortModalOpen}>그룹관리</button>
        </div>
    );
}

export default SortModal;