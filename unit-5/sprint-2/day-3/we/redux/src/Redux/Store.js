import { createStore, combineReducers, applyMiddleware,compose } from "redux";

import { Countreducer } from "./CounterStore/reducer";

import { Todoreducer } from "./TodoStore/reducer";

const reducer = combineReducers({
  count: Countreducer,
  todos: Todoreducer,
});

const middleware1 = (store) => (next) => (action) => {
  console.log("m1top");
  next(action);
   console.log("m1belo");
};

const middleware2 = (store) => (next) => (action) => {
   console.log("m2top");
  next(action);
   console.log("m2belo");
};

export const store = createStore(
  reducer,
 compose( applyMiddleware(middleware1, middleware2),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
