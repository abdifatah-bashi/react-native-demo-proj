import reducer from "./reducer";
import {createStore, combineReducers  } from "redux";

const rootReducer = combineReducers({
  noteReducer: reducer
});

const configStore = () => {
  return createStore(rootReducer);
}

export default configStore;