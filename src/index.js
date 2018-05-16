import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import logger from "redux-logger";
import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
