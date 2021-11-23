import { INC_COUNT, DEC_COUNT, ADD_TODO } from "./actionType.js";

// const state = {
//   counter:1
// }

export const reducer = (state, action) => {
  switch (action.type) {
    case INC_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DEC_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
