import React from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { Router, Route, Switch } from "react-router-dom";
import PokemonPage from "./components/PokemonPage";
import history from "./history";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/main" component={MainComponent} />
            <Route path="/pokemon-page/:name" component={PokemonPage} />
            <Route render={() => <h3>Not Found</h3>} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
