import {
  ADD_COUNT,
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  SUB_COUNT,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR
} from "./actionType.js";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

export const subCount = (data) => {
  return {
    type: SUB_COUNT,
    payload: data,
  };
};

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const addTodoLoading = () => ({ type: ADD_TODO_LOADING });
export const addTodoSuccess = (data) => ({
  type: ADD_TODO_SUCCESS,
  payload: data,
});

export const addTodoError = (data) => ({ type: ADD_TODO_ERROR, payload: data });

export const getTodoLoading = () => ({ type: GET_TODO_LOADING });
export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoError = (data) => ({ type: GET_TODO_ERROR, payload: data });
