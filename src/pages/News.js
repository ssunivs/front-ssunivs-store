import headTitle from "pages/headTitle.module.css";
import NavBar from "components/NavBar.js";
// import styles from "pages/Order.module.css";

function News(){
    return (
        <div>
            <br></br>
            <NavBar />
            <br></br>
            <br></br>
            <h1  className={headTitle.head}>News</h1>

        </div>
    );
}

export default News;