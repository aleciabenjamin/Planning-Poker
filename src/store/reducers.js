import { combineReducers } from "redux";

const combinedReducer = combineReducers({});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
