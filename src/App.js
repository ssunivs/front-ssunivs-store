//Router
import {
	BrowserRouter as Router ,
	Switch,
	Route,
} from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "redux/store";

//Pages -> 코드 줄이는 거 연구필요..
import Home from "pages/Home";
import AboutSsua from "pages/AboutSsua";
import AboutSsunivers from "pages/AboutSsunivers";
import MainStore from "pages/MainStore";
import Reservation from "pages/Reservation";
import Notice from "pages/Notice";
import FAQ from "pages/FAQ";
import LogIn from "pages/LogIn";
import MyPage from "pages/MyPage";
import Cart from "pages/Cart";
import EditProfile from "pages/EditProfile";


//Common components
import Header from "components/Header";
import Footer from "components/Footer";
import FloatingMenu from "components/FloatingMenu";

import Wrap from "components/Wrap";

function App() {

  return (
    <Provider store={store}>
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
            <Route path="/MyPage" component={MyPage} />
            <Route path="/Cart" component={Cart} />

            <Route path="/EditProfile" component={EditProfile} />
          </Switch>   

        </Wrap>
          <Footer />
      </Router>
    </Provider>
  );
}

export default App;