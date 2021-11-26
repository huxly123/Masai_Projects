import { createStore, combineReducers, applyMiddleware,compose } from "redux";

import { Countreducer } from "./CounterStore/reducer";

import { Todoreducer } from "./TodoStore/reducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  count: Countreducer,
  todos: Todoreducer,
});

const middleware1 = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch)
  } else {
    next(action);
  }
};

// const middleware2 = (store) => (next) => (action) => {
//   //  console.log("m2top");
//   next(action);
//   //  console.log("m2belo");
// };

export const store = createStore(
  reducer,
 compose( applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
