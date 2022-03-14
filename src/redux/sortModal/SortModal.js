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
              <fieldset className={styles.sortListArea}>
                <legend>현재</legend>
              <i>sortList 영역</i>
              </fieldset>

              <div>
              <form>
                <input type="text"
                      name="addedSort"
                      className={styles.sortInput} required/>
                <button>추가하기</button>
              </form>

              <form>
                <input type="text"
                      name="DeletedSort"
                      className={styles.sortInput} required/>
                <button>삭제하기</button>
              </form>
              </div>
            </div>


            <div id={styles.modalControls}
                 onClick={e => e.stopPropagation()}>
              <button type="button"
                      className={styles.modalControl}
                      onClick={handleSortModalClose}>취 소</button>
              <button className={styles.modalControl}>확 인</button>
            </div>

          </div>
        </div>
            <button type="button"
                    style={{fontSize: "11px", width: "60px"}}
                    onClick={handleSortModalOpen}>그룹관리</button>
        </div>
    );
}

export default SortModal;