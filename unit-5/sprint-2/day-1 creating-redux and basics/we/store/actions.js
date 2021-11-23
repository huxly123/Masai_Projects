import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionType.js"

export const incCounter = (data) => {
    return {
        type: INC_COUNT,
        payload:data
    }
}

export const decCounter = (data) => {
  return {
    type: DEC_COUNT,
    payload: data,
  };
};

export const todoCounter = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};