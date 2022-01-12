import {
	BrowserRouter as Router ,
	Switch,
	Route,
} from "react-router-dom";

//Pages
import Home from "pages/Home";
import Cart from "pages/Cart";
import MyPage from "pages/MyPage";

//Common components
import Header from "components/Header";
import Footer from "components/Footer";

import styles from "App.module.css";


function App() {
  return (
    <Router>
      <div id={styles.wrap}>
  
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cart" component={Cart} />
          <Route path="/MyPage" component={MyPage} />
        </Switch>   

      </div>
        <Footer />
    </Router>
  );
}

export default App;