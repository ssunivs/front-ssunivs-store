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
import Notice from "pages/Notice";
import FAQ from "pages/FAQ";
import Contact from "pages/Contact";
import Deliver from "pages/Notice.Deliver";
import Exchange from "pages/Notice.Exchange";
import Refund from "pages/Notice.Refund";
import Payment from "pages/Notice.Payment";
import Event from "pages/Notice.Event"


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
            <Route path="/Notice.3" component={Deliver} />
            <Route path="/Notice.5" component={Exchange} />
            <Route path="/Notice.4" component={Refund} />
            <Route path="/Notice.2" component={Payment} />
            <Route path="/Notice.1" component={Event} />

          </Switch>   
        </Wrap>
          <Footer />
      </Router>
  );
}

export default App;