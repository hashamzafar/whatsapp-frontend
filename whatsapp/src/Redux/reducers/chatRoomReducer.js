import { initialState } from "../store/index.js"
import { ADD_CHAT_ROOM } from "../actions/types.js"


const chatRoomReducer = (state = initialState.chatRoom, action) => {
    switch (action.type) {
        case ADD_CHAT_ROOM:

            return {
                ...state,
                create: action.payload
            }

        default:
            return state
    }
}

export default chatRoomReducer