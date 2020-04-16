import { SET_POLL_TYPE, SET_SESSION_ID } from "store/actions/types";

const initialState = {
  pollType: null,
  sessionId: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLL_TYPE:
      state = { ...state, pollType: action.pollType };
      break;
    case SET_SESSION_ID:
      state = { ...state, sessionId: action.sesionId };
      break;
    default:
  }
  return state;
}

export default reducer;
