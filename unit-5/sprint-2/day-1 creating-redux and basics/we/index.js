// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.state = initState;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatchEvent(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

import { createStore } from "redux";
import { decCounter, incCounter, todoCounter } from "./store/actions.js";

import { reducer } from "./store/reducer.js";



const init = { count: 0, todos: [] };

const store = createStore(reducer, init);

store.dispatch(incCounter(10));

store.dispatch(decCounter(6));
console.log(store.getState());
store.dispatch(todoCounter({ id: 1, status: false, title: "Learn Redux" }));

console.log(store.getState());
