import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import queryValueReducer from "../reducers/queryReducer.js";
import thunk from "redux-thunk";
import currentChatDataBaseReducer from '../reducers/chatDataReducer'

export const initialState = {

    chat: {
        list: [],
        loading: false,
        error: false
    },

    searchValue: {
        query: "",
    },
};

const combinedReducers = combineReducers({
    searchValue: queryValueReducer,
    chat: currentChatDataBaseReducer,
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
