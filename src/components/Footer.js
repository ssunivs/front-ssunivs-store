import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import styles from "components/Footer.module.css";
import SocialLinks from "components/SocialLinks";

//wrap에 안 쌓여 있습니다.
function Footer(){

    //Detect pathname
    const location = useLocation();
    let path = location.pathname;

    useEffect((path) => {
        path = location.pathname;
    }, [location]);

    return (
        <footer id={styles.footer}
                style={{backgroundColor: (path==="/")? "white" : "#A5D1FC",}}>
            <div class="grid one-full">
                <img id={styles.footerLogo} src="https://www.ssunivs.com/wp-content/uploads/2021/07/video_watermark.png" alt="우주최강 슈니버스=3"/>
                
                <p>💐𝙃𝙚𝙡𝙡𝙤, 𝙎𝙎𝙐𝙉𝙄𝙑𝙀𝙍𝙎𝙀 🌌</p>
                
                <div>
                    <p> 슈니버스 | 서울특별시 동작구 상도로55길 8, 304호(상도동, 챌린지스테이션)<br></br>
                                대표👩🏻‍💼  최정민<br></br>
                                사업자등록번호 : 435-73-00312 <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=4357300312" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >🔍</a>
                                | 통신판매업신고번호 : 2021-서울동작-1371<br></br><br></br>
                    </p>
    
                    <a href='https://mark.inicis.com/mark/popup_v3.php?mid=CIGssunivs'
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src="https://image.inicis.com/mkt/certmark/inipay/inipay_43x43_color.png" 
                        className={styles.certificationMark}
                        title='클릭하시면 이니시스 결제시스템의 유효성을 확인하실 수 있습니다.'
                        alt="이니시스" />
                    </a>
    
                    <a href="https://okbfex.kbstar.com/quics?page=C021590&cc=b034066%3Ab035526&mHValue=8994de4139f9babe938e12c5ed93f12e#AutoLogOut"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src="http://img1.kbstar.com/img/escrow/escrowcmark.gif" 
                        className={styles.certificationMark}
                        title='클릭하시면 kb에스크로 판매자 확인정보를 조회하실 수 있습니다.'
                        alt="kb에스크로" />
                    </a>
    
                    <p>
                        <br></br>
                            <a href="https://pf.kakao.com/_JNgis"
                            target="_blank"
                            rel="noopener noreferrer">카카오톡 채널 고객센터</a> 
                                | TEL. 0502-1905-0525 
                                <br></br>
                                <br></br>
                            <p>
                                <a href="https://www.ssunivs.com/개인정보-보호정책"
                                target="_blank"
                                rel="noopener noreferrer"> [개인정보 보호정책] | </a>
                                <a href="https://www.ssunivs.com/서비스-이용약관"
                                target="_blank"
                                rel="noopener noreferrer"> [서비스 이용약관] </a>
                                <br></br>
                            </p>
                                <a href="mailto:ssua@ssunivs.com?cc=snvs.official@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">Contact Us | </a>
                                <a href="https://ssuniverse.notion.site/Hello-SSUNIVERSE-7373f0cd163d4d2ca0b1574389441727"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Notion
                                    <img src="https://raw.githubusercontent.com/ssunivs/ssutopia-store/main/img/flower-blue.png"
                                alt='Team Notion'
                                className={styles.teamNotion} /></a>
                                <br></br>
                                <br></br>
                    </p>
    
                    <p>© 슈니버스 Co. All Rights Reserved. </p>
                </div>
                <SocialLinks size="25px"/>
            </div>
        </footer>
    );
}

export default Footer;