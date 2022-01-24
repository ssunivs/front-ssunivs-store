import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom";

import SocialLinks from "components/SocialLinks";
// import {SearchIcon} from "react-icons/fi";
import styles from "components/Menu.module.css";

/*
//Detect LogInState
import { connect } from "react-redux";
import { setLogOut } from "redux/setAdmin/actions";
*/

function Menu(){
    const [open, setOpen] = useState(false);
    const onMenuClick = () =>{
        setOpen((current) => !current);
    }

    //Detect pathname
    const location = useLocation();
    let path = location.pathname;

    useEffect((path) => {
        path = location.pathname;
        setOpen(false);
    }, [location]);

    return (
        <div>
            <div className={styles.hamburgerIcon}
                onClick={onMenuClick}>
                <div className={open? styles.line1Actived : styles.line}
                    style={{backgroundColor: (path==="/")? "white" : "#b2b2b2"}}></div>
                <div className={open? styles.line2Actived : styles.line}
                    style={{backgroundColor: (path==="/")? "white" : "#b2b2b2"}}></div>
                <div className={open? styles.line3Actived : styles.line}
                    style={{backgroundColor: (path==="/")? "white" : "#b2b2b2"}}></div>
            </div>
            
            <div className={open? styles.menuOpend : styles.menuClosed}
                style={{backgroundColor: "#04488C"}}>
            
            {/* <div  className = {styles.search}>
                <input type="search" name="q"></input>
                <input type="submit" value="검색"></input>
            </div> */}
            
            <ul className={styles.menuList}>
                <li>ABOUT US</li>
                <ul className={styles.detailLists}>
                <Link to="/News"><li className={styles.list}
                                            style={{color: (path==="/News")? "#A5D1FC" : ""}}>News</li></Link> 
                    <br></br>
                <Link to="/AboutSsua"><li className={styles.list}
                                        style={{color: (path==="/AboutSsua")? "#A5D1FC" : ""}}>ssua</li></Link>
                    <br></br>
                <Link to="/AboutSsunivers"><li className={styles.list}
                                            style={{color: (path==="/AboutSsunivers")? "#A5D1FC" : ""}}>ssunivers</li></Link>                           
                </ul>
                    <br></br>
                <li>STORE</li>
                <ul className={styles.detailLists}>
                    <a href="https://www.ssunivs.com/">GO !</a><br></br>
                    <Link to="/Reservation"><li className={styles.list}
                                        style={{color: (path==="/Reservation")? "#A5D1FC" : ""}}>방문수령 예약</li></Link>

                </ul>
                <br></br>
                <li>BOARD</li>
                <ul className={styles.detailLists}>
                <Link to="/Notice"><li className={styles.list}
                                    style={{color: (path==="/Notice")? "#A5D1FC" : ""}}>Notice</li></Link>
                    <br></br>
                <Link to="/FAQ"><li className={styles.list}
                                    style={{color: (path==="/FAQ")? "#A5D1FC" : ""}}>자주 묻는 질문</li></Link>                    
                </ul>
                    <br></br>
                <li>CONTACT</li>
                <ul className={styles.detailLists}>
                <Link to="/Contact"><li className={styles.list}
                                        style={{color: (path==="/Contact")? "#A5D1FC" : ""}}>Contact Us</li></Link>
                    <br></br>                        
                {/* <a  href="mailto:ssua@ssunivs.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <li className={styles.list}>ssua@ssunivs.com</li>
                </a> */}
                </ul>
            </ul>

            <SocialLinks size="30px" color="white"/>

                {/* <ul className={styles.user}>
                    <Link to="/LogIn"><li className={styles.list}
                                        style={{color: (path==="/LogIn")? "#A5D1FC" : "",
                                                display: (logInState)? "none": ""}}>LOG IN</li></Link>
                    <Link to="/"><li className={styles.list}
                                        style={{display: (logInState)? "": "none"}}
                                        onClick={setLogOut}>LOG OUT</li></Link>
                    <Link to={(logInState)?"/MyPage":"/LogIn"}><li className={styles.list}
                                        style={{color: (path==="/MyPage")? "#A5D1FC" : ""}}>MY PAGE</li></Link>
                    <Link to={(logInState)?"/Cart":"/LogIn"}><li className={styles.list}
                                        style={{color: (path==="/Cart")? "#A5D1FC" : ""}}>CART</li></Link>    
                </ul> */}
            </div>
        </div>
    );
}

/*
//Detect LogInState
const mapStateToProps = (state) => {
    return{
        logInState: state.logInOut.logInState
    };
}; 

const mapDispatchToProps = (dispatch)=>{
    return {
        setLogOut: ()=>dispatch(setLogOut())
    };
};

export default connect(mapStateToProps)(Menu);
*/
export default Menu;