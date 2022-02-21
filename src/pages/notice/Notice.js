import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";

import Board from "redux/CRUD/Board";

function Notice(){
    return (
        <div>
            <br></br>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}> NOTICE </h1>
            
            <Board />
        </div>
    );
}

export default Notice;