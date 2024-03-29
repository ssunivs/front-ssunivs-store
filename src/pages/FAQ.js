import NavBar from "components/NavBar.js";
import headTitle from "pages/headTitle.module.css";
import styles from "pages/FAQ.module.css";

function FAQ(){
    return (
        <div>
            <br></br>
            <NavBar />
            <h1 className={headTitle.head}>FAQ : 자주 묻는 질문</h1>
            <div className={styles.faq}>
                <details className={styles.faqDetails}>
                    <summary>슈니버스는 어떤 종류의 단체인가요?</summary>
                        <p>
                        슈니버스는 숭실대학교 학부생들로 구성된 팀이자, 숭실대학교 창업지원단 캠퍼스타운 소속으로 서울시 동작구 캠퍼스타운에 입주한 창업 기업입니다🙂
                        <br></br><br></br>
                        나름 학교 뒤편 챌린지스테이션에 사무실도 있는 어엿한 병아리 창업팀입니다🐣 학교를 위해, 소소하지만 소중하면서도 뜻깊으며 선한 일을 하기 위해 모였습니다.
                        </p>
                </details>
                <hr></hr>
                <details className={styles.faqDetails}>
                    <summary>어떤 계기로 슈아를 만들게 되었나요?</summary>
                        <p>
                        단순히 시작된 계기를 말씀 드리자면 졸업 인형을 갖고 싶어서인데. 우리 학교도 타 학교처럼 굿즈 문화가 활성화되었으면 좋겠다는 생각이 들어 시작하게 되었습니다. 1학년 때부터 대표의 꿈이 사회에 수익을 일부 환원하는 것이었는데 학교라는 작은 사회에 여러분들과 함께. 기부하게 되어 기쁩니다.
                        <br></br><br></br>
                        아무래도 졸업을 하게 되면 사회에 나가 여러 일을 겪게 될 텐데. 똑똑하고 듬직한 친구 하나 만들어서 두고두고 보면 “내가 4년 동안 열심히 공부해서 졸업도 했는데 뭐가 두려워 !” 하시면서 용기를 얻게 되지 않을까 해서 용감하면서 친근하고 따뜻한 슈아를 만들게 되었습니다.
                        </p>
                </details>
                <hr></hr>
                <details className={styles.faqDetails}>
                    <summary>슈니버스의 컨셉이나 탄생 비화가 있을까요?</summary>
                        <p>
                        슈니버스는 초창기 4인에서 시작되었고! 대표를 필두로 학교에 의미 있는 일을 하고 싶은 사람, 저를 지지해주고 항상 바르게 방향지시등을 켜주는 사람, 슈아를 귀여워 하면서 저를 힐링해주는 나이팅게일 같은 사람이 모여 슈니버스가 되었습니다🙂
                        <br></br><br></br>
                        대표하는 컬러는 “Blue”로, Blue는 우울함을 상징하기도 하는데요. 저희 팀과 함께하시면서 Blue가 더 이상 우울한 색상이 아닌 모두에게 맑은 힘을 주는 따뜻한 색상이라고 느끼셨으면 좋겠습니다💙
                        </p>
                </details>
                <hr></hr>
                <details className={styles.faqDetails}>
                    <summary>슈아의 성격이나 세계관이 있나요?</summary>
                        <p>
                        슈아는 백마상에서 탈출한 영물로 여러분들께 친근하게 다가가기 위해 귀여운 말의 형상을 하고 있습니다🐴=3 “탈출” 이라는 단어에서도 아시듯이 굉장히 자유분방한 친구입니다.
                        <br></br><br></br>
                        슈아는 숭실대학교 학생들이 좋아 함께 오랫 동안 학교에 다니고 있습니다. 기쁜 일은 함께, 슬픈 일도 함께. 슈아가 학교 다니는 동안 학생들에게 도움을 많이 받아와서 베풀기 위해 학교를 다니며, 이곳저곳 손길이 필요한 곳에 달려가 보은을 하고 있답니다. 그렇기에 학번은 추정할 수 없고, 전공 또한 저희 학교가 다전공이 다 잘 되어 있는 데에는 이유가 있다는 설정입니다😇.
                        <br></br><br></br>
                        슈아는 항상 여러분 곁에 있기 위해 무엇이든 합니다. 슈니버스의 모델이 된 계기에도 아마 이러한 동기와 목표가 있지 않았나 싶습니다.
                        </p>
                </details>
                <hr></hr>
                <details className={styles.faqDetails}>
                    <summary>수익 기부를 결정하게 된 이유가 무엇인가요?</summary>
                        <p>
                        슈니버스는 애초에 굿즈 사업을 통해 숭실대학교 학생들의 기부 문화 확보를 지향점으로 삼았습니다. 그렇기에 기부하는 것이 당연하다고 처음부터 생각 해 왔습니다. 하지만 굿즈 사업이 그렇게 좋은 수익 모델은 아니기에 고민을 많이 하였고 결과로도 그렇게 나타났고 우려를 표하는 분들도 있었습니다만, 리스크는 최고의 투자 유치를 위한 밑거름이 되기도 한다고 생각합니다.
                        <br></br><br></br>
                        여기서 투자 유치라 함은. 여러분이 슈니버스를 향해 보내주시는 믿음을 상징한다고 볼 수도 있겠지요. 그렇기에 우리 슈니버스 팀원들과 한 마음 한 뜻을 모아 기부하게 되었습니다. 저희가 나아가고 있는 이상향이 절대 무지개는 아니며 새로운 물결을 낳는다고 생각하며 슈니버스 답게 잔잔하게 전진하도록 하겠습니다. 저희와 뜻을 같이 하는 사람들이 많아지기를 바랍니다. 또 저희가 지박령처럼 다니던 도서관에 기부하게 되어 정말 기쁩니다. 좋은 곳에 좋은 마음으로 쓰이길 바랍니다.
                        </p>
                </details>
                <hr></hr>
                </div>
        </div>
    );
}

export default FAQ;