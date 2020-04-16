import React from "react";
import { Provider } from "react-redux";
import store from "store/index";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "layouts/DefaultLayout";
import SessionSelection from "pages/SessionSelection";
import JoinSession from "pages/JoinSession";
import CreateSession from "pages/CreateSession";
import Polling from "pages/Polling";
import "./App.css";

const hist = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/polling/:sessionId" component={DefaultLayout(Polling)} />
          <Route
            path="/create-session/:sessionId"
            component={DefaultLayout(CreateSession)}
          />
          <Route path="/join-session/:sessionId" component={DefaultLayout(JoinSession)} />
          <Route path="/" component={DefaultLayout(SessionSelection)} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
