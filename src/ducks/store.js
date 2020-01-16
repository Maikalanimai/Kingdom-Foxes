import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";


export default createStore(
null,
  (applyMiddleware(promiseMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
