import {
  ADD_COUNT,
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  SUB_COUNT,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING, GET_TODO_SUCCESS,
  GET_TODO_ERROR
} from "./actionType.js";

const initState = {
  count: 10,
  todos: 
    {
      loading: false,
      data: [],
      error: false,
    },
  
};
console.log();
export const reducer = (state = initState, { type, payload }) => {
  // console.log(state);

  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + payload,
      };
    case SUB_COUNT:
      return {
        ...state,
        count: state.count - payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case ADD_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: false,
        },
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,

        todos: {
          ...state.todos,
          data: [...state.todos.data, payload],
        },
      };

    case ADD_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: true,
        },
      };

    case GET_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: false,
        },
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,

        todos: {
          ...state.todos,
          data:payload,
        },
      };

    case GET_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: true,
        },
      };
    default:
      return { ...state };
  }
};
