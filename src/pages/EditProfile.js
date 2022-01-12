import headTitle from "pages/headTitle.module.css";
import styles from "pages/EditProfile.module.css";

function EditProfile(){
    return (
        <div id={styles.container}>
            <h1 className={headTitle.head}>회원 정보 수정</h1>

            <h3>기본 정보</h3>
            <table>
                <tr>
                    <th>아이디</th> <td>0</td>
                </tr>
                
                <tr>
                    <th>비밀번호</th> <td>0</td>
                </tr>
                
                <tr>
                    <th>비밀번호 확인</th> <td>0</td>
                </tr>

                <tr>
                    <th>이름</th> <td>0</td>
                </tr>

                <tr>
                    <th>휴대전화</th> <td>0</td> <td>0</td> <td>0</td>
                </tr>

                <tr>
                    <th>이메일</th> <td>0</td>
                </tr>
            </table>

            <button>저장</button>
        </div>

        
    );
}

export default EditProfile;