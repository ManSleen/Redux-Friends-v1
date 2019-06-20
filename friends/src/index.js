import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </Router>,
  document.getElementById("root")
);
