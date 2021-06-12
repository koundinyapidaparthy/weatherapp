import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
import Default from "./components/home/HomeWeather";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Default />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
