import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import styles from "pages/FAQ.module.css";

function FAQ(){
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <h1 className={headTitle.head}>FAQ : 자주 묻는 질문</h1>
            <details>
                <summary>인스타그램 팔로워 이벤트 1,000원 할인권은 어떻게 받아야 하나요?</summary>
                <ul className={styles.details}>
                    <li>
                    슈니버스 공식 인스타그램 (@snvs.official) 을 팔로우 하신 후, 팔로잉 아이디를 카카오톡 채널로 보내주시면 관리자 확인 후 쿠폰을 발급해 드립니다.<br></br>
                쿠폰과 관련한 자세한 사항은 이벤트 쿠폰 발급 방법 🎫 게시글을 확인해 주시기 바랍니다.
                    </li>
                    </ul>
            </details>
            <br></br>
            <details>
                <summary>수익은 어떻게 하실 예정인가요?</summary>
                <ul className={styles.details}>
                    <li>펀딩 형태의 결제가 아니기 때문에 일단 수익을 확인해 봐야 알 것 같습니다.<br></br> 
                저도 처음에는 펀딩처럼 진행해 보려 했으나 개인이 플랫폼을 제외 전자상거래업을 통해서 펀딩을 여는 것은 불법이라고 합니다.</li>
                    <li>
                    슈니버스는 일반적인 인터넷 통신판매업과 동일하게 전자지급결제대행서비스에 가입되어 있습니다.<br></br> 
                    해당 서비스는 온라인 상점에서 상품과 서비스 판매 시, 고객이 신용카드 및 다양한 결제수단을 이용하여 안전하게 결제할 수 있도록 지원하는 서비스이며 필수입니다.<br></br> 
                    PG사인 KG이니시스에서 고객 배송 이후에 정산해 주시기 때문에 저 또한 송장 발부가 완료된 익월 12월에 정산 받을 수 있다는 점 알려 드립니다.<br></br>
                    </li>
                    <li>
                    또한, 정산이 모든 금액이 되는 것이 아닌 카드수수료를 비롯한 각종 결제수단의 수수료를 제외. PG사의 각종 수수료 제외.<br></br> 
                    인형처럼 생산-주문-배송이 오래 걸리는 실물 판매의 경우 PG사에서 위험성을 감지. 보증보험 가입을 요구하여 보증보험 가입 된 상태이기 때문에<br></br>
                    정산 또한 12~2월에 걸쳐 나누어 받게 됩니다.<br></br>
                    </li>
                    <li>
                    이에 따라 기부도 12월 말 크리스마스 즈음을 예상하나, 원금 회수 가능성에 따라 달라질 수 있다는 점 알려드립니다.<br></br> 
                    기부는 숭실대학교 발전기금팀과 협의하여 진행됩니다.<br></br>
                    </li>
                </ul>

            </details>













        </div>
    );
}

export default FAQ;