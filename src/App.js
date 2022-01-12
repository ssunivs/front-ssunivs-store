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
import MyPage from "pages/MyPage";
import Cart from "pages/Cart";
import EditProfile from "pages/EditProfile";


//Common components
import Header from "components/Header";
import Footer from "components/Footer";
import FloatingMenu from "components/FloatingMenu";
import styles from "App.module.css";


function App() {
  return (
      <Router>
        <div id={styles.wrap}>
    
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

        </div>
          <Footer />
      </Router>
  );
}

export default App;