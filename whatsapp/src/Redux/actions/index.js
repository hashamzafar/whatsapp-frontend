import { ADD_QUERY, FILL_CHAT_DATA, FILL_DATA_LOADING, FILL_DATA_ERROR, ADD_CHAT_ROOM } from "./types.js"

export const searchQueryAction = (queryValue) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_QUERY,
            payload: queryValue
        })
    }
}

export const chatRoomAction = (boolean) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_CHAT_ROOM,
            payload: boolean
        })
    }
}

export const fillChatDataBaseAction = () => {


    return async (dispatch, getState) => {


        try {
            let response = await fetch(`https://what-s-app.herokuapp.com/chats`, {
                headers: {
                    'Authorization': `Bearer ${window.localStorage.getItem('Token')}`
                }
            })
            if (response.ok) {
                let data = await response.json()
                dispatch({
                    type: FILL_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_CHAT_DATA,
                    payload: data
                })
            } else {
                console.log("error");
                dispatch({
                    type: FILL_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_DATA_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: FILL_DATA_LOADING,
                payload: false
            })
            dispatch({
                type: FILL_DATA_ERROR,
                payload: true
            })
        }

    }
}