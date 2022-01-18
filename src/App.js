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
import MainStore from "pages/MainStore";
import Reservation from "pages/Reservation";
import Notice from "pages/Notice";
import FAQ from "pages/FAQ";
import LogIn from "pages/LogIn";
import Join from "pages/Join";
import Welcome from "pages/Welcome";
import MyPage from "pages/MyPage";
import Cart from "pages/Cart";
import Order from "pages/Order";
import EditProfile from "pages/EditProfile";
import Coupon from "pages/Coupon";

import SsuaDollBox from "pages/MainStore.SsuaDollBox";
import SsuaDollGoods from "pages/MainStore.SsuaDollGoods";
import SsuaDollSet from "pages/MainStore.SsuaDollSet";

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

            <Route path="/MainStore" component={MainStore} />
            <Route path="/Reservation" component={Reservation} />

            <Route path="/Notice" component={Notice} />
            <Route path="/FAQ" component={FAQ} />

            <Route path="/LogIn" component={LogIn} />
            <Route path="/Join" component={Join} />
            <Route path="/Welcome" component={Welcome} />
            <Route path="/MyPage" component={MyPage} />
            <Route path="/Cart" component={Cart} />

            <Route path="/Order" component={Order} />
            <Route path="/EditProfile" component={EditProfile} />
            <Route path="/Coupon" component={Coupon} />

            <Route path="/MainStore.SsuaDollGoods" component={SsuaDollGoods} />
            <Route path="/MainStore.SsuaDollSet" component={SsuaDollSet} />
            <Route path="/MainStore.SsuaDollBox" component={SsuaDollBox} />

          </Switch>   

        </Wrap>
          <Footer />
      </Router>
  );
}

export default App;