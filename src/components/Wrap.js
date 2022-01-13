import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import styles from "components/Wrap.module.css"

function Wrap({children}){
    //Detect pathname
    const location = useLocation();
    let path = location.pathname;
    
    useEffect((path) => {
        path = location.pathname;
    }, [location]);

    const style = {
        backgroundColor: (path==="/")? "#A5D1FC" : "white"};

    return (
        <div id={styles.wrap}
            style={style}>{children}</div>
    );
}

export default Wrap;