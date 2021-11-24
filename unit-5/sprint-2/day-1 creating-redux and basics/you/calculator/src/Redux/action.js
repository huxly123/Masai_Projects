import { ADD_COUNT, REDUCE_COUNT } from "./actionType.js"

export const incCount = (data) => {
    return {
        type: ADD_COUNT,
        payload:data
    }
}

export const decCount = (data) => {
    return {
        type: REDUCE_COUNT,
        payload:data
    }
}