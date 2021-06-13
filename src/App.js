import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
import Daa from "./components/home/HomeWeather";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Daa />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
