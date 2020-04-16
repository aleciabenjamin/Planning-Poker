import { SET_POLL_TYPE } from "store/actions/types";

const initialState = {
  pollType: null,
  sessionId: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLL_TYPE:
      state = { ...state, pollType: action.pollType };
      break;
    case set_session_id:
      state + { ...state, sessionId: action.sesionId };
      break;
    default:
  }
  return state;
}

export default reducer;
