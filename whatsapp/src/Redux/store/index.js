import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import queryValueReducer from "../reducers/queryReducer.js";
import thunk from "redux-thunk";

export const initialState = {
  searchValue: {
    query: "",
  },
};

const combinedReducers = combineReducers({
  searchValue: queryValueReducer,
});

const configureStore = createStore(
  combinedReducers,
  initialState,
  // process.env.REACT_APP_DEVELOPMENT
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
