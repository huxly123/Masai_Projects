import { ADD_COUNT, REDUCE_COUNT } from "./actionType.js"

export const reducer = (state, {type,payload}) => {
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + payload,
            };
        case REDUCE_COUNT:
            return {
                ...state,
                count: state.count - payload,
            };
    
        default:
            return state
    }
}