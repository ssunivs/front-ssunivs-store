//Router
import {
	BrowserRouter as Router ,
	Switch,
	Route,
} from "react-router-dom";

//Pages -> 코드 줄이는 거 연구필요..
import Home from "pages/Home";
import AboutSsua from "pages/AboutSsua";
import AboutSsunivers from "pages/AboutSsunivers";
import News from "pages/News";
import Reservation from "pages/Reservation";
import Notice from "pages/notice/Notice";
import FAQ from "pages/FAQ";
import Contact from "pages/Contact";
import NoticePost from "pages/notice/NoticePost";
import LogIn from "pages/LogIn";
import Privacy from "pages/Privacy"


//Common components
import Header from "components/Header";
import Footer from "components/Footer";
import FloatingMenu from "components/FloatingMenu";
import Wrap from "components/Wrap";

function App() {

  return (
      <Router>
        <Wrap>
          <Header />
          <FloatingMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutSsua" component={AboutSsua} />
            <Route path="/AboutSsunivers" component={AboutSsunivers} />
            <Route path="/News" component={News}/>
            <Route path="/Reservation" component={Reservation} />
            <Route path="/Notice" component={Notice} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/Contact" component={Contact}/>
            <Route path="/Notice.post" component={NoticePost} />
            <Route path="/LogIn" component={LogIn}/>
            <Route path="/Privacy" component={Privacy}/>
          </Switch>   
        </Wrap>
          <Footer />
      </Router>
  );
}

export default App;