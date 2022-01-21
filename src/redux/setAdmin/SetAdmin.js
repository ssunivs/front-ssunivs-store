import { connect } from "react-redux";
import { setAdmin, setOutAdmin } from "./actions";

const SetAdmin = ({ id, setAdmin, setOutAdmin, adminState}) => {
    return(
        <div>{/*id는 css적용용 */}
            <button id = {id} 
                    style={{display: (adminState)? "" : "none"}}
                    onClick={setOutAdmin}>
                (임시) 관리자 모드입니다
            </button>
            <button id = {id} 
                    style={{display: (adminState)? "none" : ""}}
                    onClick={setAdmin}>
                (임시) 사용자 모드입니다
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        adminState: state.adminMode.adminState
    };
}; 

const mapDispatchToProps = (dispatch)=>{
    return {
        setAdmin: ()=>dispatch(setAdmin()),
        setOutAdmin: ()=>dispatch(setOutAdmin())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetAdmin);