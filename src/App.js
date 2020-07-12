import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import PokemonPage from "./components/PokemonPage";
import history from "./history";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/main" component={MainComponent} />
          <Route path="/pokemon-page/:name" component={PokemonPage} />
          <Route render={() => <h3>Not Found</h3>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
