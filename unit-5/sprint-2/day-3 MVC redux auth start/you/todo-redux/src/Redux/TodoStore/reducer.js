import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR
} from "./actionType";
const initState = {
  todos: {
    loading: false,
    data: [],
    error: false,
  },
};

export const Todoreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: true,
        },
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,

        todos: {
          ...state.todos,
          loading:false,
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
          loading: true,
        },
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,

        todos: {
          ...state.todos,
          loading:false,
          data: payload,
        },
      };

    case GET_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: true,
        }
      }
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading:true
       }
      }
    
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: false,
          data:[...state.todos.data,payload]
        }
      }
    
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          error:true
        }
      }
    default:
      return { ...state };
  }
};
