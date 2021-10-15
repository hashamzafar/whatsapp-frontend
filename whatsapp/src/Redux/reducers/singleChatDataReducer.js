import { initialState } from "../store/index.js";
import { FILL_SINGLE_CHAT_DATA, FILL_DATA_LOADING, FILL_DATA_ERROR } from "../actions/types.js";



const singleChatDataReducer = (state = initialState.singleChat, action) => {
    switch (action.type) {
        case FILL_SINGLE_CHAT_DATA:
            return {
                ...state,
                chat: action.payload
            }
        case FILL_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case FILL_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default singleChatDataReducer