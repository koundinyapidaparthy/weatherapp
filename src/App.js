import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
import Home from "./components/home/HomeWeather";
import Cityname from "./components/cityName/City";
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/weatherapp">
          <Home />
          </Route>
          <Route  path="/city" >
          <Cityname />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
