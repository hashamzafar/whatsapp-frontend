import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import queryValueReducer from "../reducers/queryReducer.js";
import thunk from "redux-thunk";
import currentChatDataBaseReducer from '../reducers/chatDataReducer'
import chatRoomReducer from "../reducers/chatRoomReducer.js";
import addNewChatRoomReducer from '../reducers/addNewChatRoomReducer.js'
import selectChatRoomReducer from "../reducers/selectChatRoomReducer.js";
import singleChatDataReducer from "../reducers/singleChatDataReducer.js";

export const initialState = {

    chatRoom: {
        create: false
    },

    chat: {
        list: [],
        loading: false,
        error: false
    },

    singleChat: {
        chat: [],
        loading: false,
        error: false
    },

    searchValue: {
        query: "",
    },

    newChatRoom: {
        members: [],
    },

    selectChatRoom: {
        chats: [],
    },

};

const combinedReducers = combineReducers({
    searchValue: queryValueReducer,
    chat: currentChatDataBaseReducer,
    chatRoom: chatRoomReducer,
    newChatRoom: addNewChatRoomReducer,
    selectChatRoom: selectChatRoomReducer,
    singleChat: singleChatDataReducer
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
