import { ADD_QUERY } from "./types.js"

export const searchQueryAction = (queryValue) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_QUERY,
            payload: queryValue
        })
    }
}