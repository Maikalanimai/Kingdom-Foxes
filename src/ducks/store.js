import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import joinReducer from './reducers/joinReducer'


export default createStore(
joinReducer,
  (applyMiddleware(promiseMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
