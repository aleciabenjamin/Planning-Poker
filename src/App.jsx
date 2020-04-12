import React from "react";
import { Provider } from "react-redux";
import store from "store/index";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "layouts/DefaultLayout";
import SessionSelection from "pages/SessionSelection";
import JoinSession from "pages/JoinSession";
import './App.css';

const hist = createBrowserHistory();
hist.listen();

function App() {
  return (
    <Provider store={store}>
			<Router history={hist}>
				<Switch>
					<Route path="/join-session" component={DefaultLayout(JoinSession)} />
					<Route path="/" component={DefaultLayout(SessionSelection)} />
				</Switch>
			</Router>
		</Provider>
  );
}

export default App;
