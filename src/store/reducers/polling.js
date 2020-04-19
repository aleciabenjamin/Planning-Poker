import { SET_POLL_TYPE, SET_SESSION_ID, SET_SESSION_NAME, SET_USER_NAME, SET_POLLS } from "store/actions/types";

const initialState = {
  pollType: null,
	sessionId: null,
	session_name: null,
	userName: null,
	polls: [],

};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLL_TYPE:
      state = { ...state, pollType: action.pollType };
      break;
    case SET_SESSION_ID:
      state = { ...state, sessionId: action.sessionId };
			break;
		case SET_SESSION_NAME:
			state = { ...state, sessionName: action.sessioName };
			break;
		case SET_USER_NAME:
			state = { ...state, userName: action.userName };
			break;
		case SET_POLLS:
			state = { ...state, polls: action.polls };
    default:
  }
  return state;
}

export default reducer;
