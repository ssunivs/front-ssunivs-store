import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin, setOutAdmin } from "./actions";

const SetAdmin = ({ id }) => {
    //Detect AdminMode
    const {adminState} = useSelector(state => state.adminMode);

    const dispatch = useDispatch();

    const onAdmin = () => {
        dispatch(setAdmin())
    }

    const OutAdmin = () => {
        dispatch(setOutAdmin())
    }

    return(
        <div>{/*id는 css적용용 */}
            <Link to='/Notice'><button id = {id} 
                    style={{display: (adminState)? "" : "none"}}
                    onClick={OutAdmin}>
                Admin LogOut
            </button></Link>
            <Link to='/Notice'><button id = {id} 
                    style={{display: (adminState)? "none" : ""}}
                    onClick={onAdmin}>
                (임시) 관리자 모드로 전환
            </button></Link>
        </div>
    );
};

export default SetAdmin;