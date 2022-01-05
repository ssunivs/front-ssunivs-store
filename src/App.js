import {
	BrowserRouter as Router ,
	Switch,
	Route,
} from "react-router-dom";
import Home from "pages/Home";
import QnA from "pages/QnA";
import Store from "pages/Store";
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