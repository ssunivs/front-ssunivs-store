import { connect } from "react-redux";
import { setColorSky, setColorWhite } from "./types";

export const changebackGroundColor = ({backGrondColor}) =>{
    return(
        backGrondColor
    );
}

export const changeFooterColor = ({footerColor}) =>{
    return(
        footerColor
    );
}

export const changeFontColor = ({fontColor}) =>{
    return(
        fontColor
    );
}

const mapStateToProps = (state) => {
    return{
        backGrondColor: state.backGrondColor,
        footerColor : state.footerColor,
        fontColor : state.fontColor
    };
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setColorSky: ()=>dispatch(setColorSky()),
        setColorWhite: ()=>dispatch(setColorWhite())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(changebackGroundColor, changeFooterColor, changeFontColor)