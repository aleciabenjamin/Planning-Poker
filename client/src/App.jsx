import React from "react";
import { Provider } from "react-redux";
import store from "store/index";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "layouts/DefaultLayout";
import AuthLayout from "layouts/AuthLayout";
import SessionSelection from "pages/SessionSelection";
import JoinSession from "pages/JoinSession";
import CreateSession from "pages/CreateSession";
import Polling from "pages/Polling";
import "./App.scss";

const hist = createBrowserHistory({ basename: process.env.PUBLIC_URL });

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path={"/polling/:sessionUuId"} component={AuthLayout(Polling)} />
          <Route
            path={"/create-session/:sessionUuId"}
            component={AuthLayout(CreateSession)}
          />
          <Route
            path={"/join-session/:sessionUuId"}
            component={DefaultLayout(JoinSession)}
          />
          <Route path="/" component={DefaultLayout(SessionSelection)} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
