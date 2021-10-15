import { initialState } from "../store/index.js"
import { NEW_CHAT_ROOM } from "../actions/types.js"


const queryValueReducer = (state = initialState.newChatRoom, action) => {
    switch (action.type) {
        case NEW_CHAT_ROOM:

            return {
                ...state,
                members: [...state.members, action.payload]
            }

        default:
            return state
    }
}

export default queryValueReducer