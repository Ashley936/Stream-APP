//here state will contain all the info about all the streams
import _ from "lodash"
export const streamReducers = (state = {}, action) => {
    switch (action.type) {
        case "CREATE_STREAM":
        case "UPDATE_STREAM":
        case "FETCH_STREAM": //this should already exist why r we adding it again?
            return { ...state, [action.payload.id]: action.payload }
        case "DELETE_STREAM":
            return _.omit(state, action.payload); //search action.payload in id in state and delete it
        case "FETCH_STREAMS":
            return {...state, ..._.mapKeys(action.payload,'id')} //makes an obj with id as keys
        default:
            return state
    }
}