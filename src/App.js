import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import StateRoute from "./components/StateRoute/stateRoute";
import About from "./components/About/about";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/state/:stateCode" component={StateRoute} />
      </Switch>
    );
  }
}
export default App;
