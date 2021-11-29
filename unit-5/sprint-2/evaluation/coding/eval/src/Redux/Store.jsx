import { combineReducers, createStore } from "redux";

import { AuthReducer } from "./AuthStore/reducer";
import { ShowReducer } from "./ShowStore/reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  shows: ShowReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
