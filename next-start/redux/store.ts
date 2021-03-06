import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import accountReducer from "./account/reducer";

export interface InitialState {
  [key: string]: number;
}

const exampleInitialState = {
  // lastUpdate: 0,
  // light: false,
  count: 0,
};

const storeTree = combineReducers({
  accountReducer,
});

export function initializeStore(
  initialState: InitialState = exampleInitialState
) {
  return createStore(
    storeTree,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export default storeTree;
