

import { combineReducers, createStore } from "redux"
import { AuthReducer } from "./AuthRedux/reducer"
import { Todoreducer } from "./TodoStore/reducer"


// const reducer = combineReducers({
//   todo: Todoreducer,
//   auth:AuthReducer
// })

 export const store = createStore(

Todoreducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );