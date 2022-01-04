import {
	BrowserRouter as Router , //hash, Browser 두종류
	Switch, //이 태그안에 담겨져 있는 Route들은 각각 렌더링됨
	Route, //url
} from "react-router-dom";
import Home from "route/Home";
import QnA from "route/QnA";
import Store from "route/Store";
import GNB from "components/GNB";

function App() {
  return (
  <Router>
      <GNB />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/QnA" component={QnA} />
      <Route path="/Store" component={Store} />
    </Switch>   

  </Router>  
  );
}

export default App;