import { combineReducers } from "redux";
import polling from "store/reducers/polling";

const combinedReducer = combineReducers({ polling });

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
