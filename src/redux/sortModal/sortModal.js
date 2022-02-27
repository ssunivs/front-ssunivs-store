import { useState } from "react";

const sortModal = () =>{

    return (
        <div hidden>
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
    )
}

export default sortModal;