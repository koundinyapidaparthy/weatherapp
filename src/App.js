import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
import Home from "./components/home/HomeWeather";
import Cityname from "./components/cityName/City";
import Feedback from "./components/Feedback/Feedback";
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/weatherapp">
          <Home />
          </Route>
          <Route  path="/weatherapp/city" >
          <Cityname />
          </Route>
          <Route  path="/weatherapp/feedback" >
          <Feedback />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
