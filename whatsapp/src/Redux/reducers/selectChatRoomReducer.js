import { initialState } from "../store/index.js"
import { SELECT_CHAT_ROOM } from "../actions/types.js"


const selectChatRoomReducer = (state = initialState.selectChatRoom, action) => {
    switch (action.type) {
        case SELECT_CHAT_ROOM:

            return {
                ...state,
                chats: action.payload
            }

        default:
            return state
    }
}

export default selectChatRoomReducer