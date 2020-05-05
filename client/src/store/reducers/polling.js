import {
	SET_SESSION_ID,
	SET_POLL_TYPE,
	SET_SESSION_UUID,
  SET_SESSION_NAME,
  SET_USER_NAME,
  SET_POLLS,
  SET_POLL_TYPES_LIST,
} from "store/actions/types";

const initialState = {
	sessionId: 0,
  pollTypesList: [],
  pollType: null,
	sessionUuId: null,
  session_name: null,
  userName: null,
  polls: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
		case SET_SESSION_ID:
      state = { ...state, sessionId: action.sessionId };
      break;
		case SET_POLL_TYPES_LIST:
			state = { ...state, pollTypesList: action.pollTypesList };
			break;
    case SET_POLL_TYPE:
      state = { ...state, pollType: action.pollType };
			break;
		case SET_SESSION_UUID:
			state = { ...state, pollType: action.pollType };
			break;
    case SET_SESSION_NAME:
      state = { ...state, sessionUuId: action.sessionUuId };
      break;
    case SET_USER_NAME:
      state = { ...state, userName: action.userName };
      break;
    case SET_POLLS:
      state = { ...state, polls: action.polls };
      break;
    default:
  }
  return state;
}

export default reducer;
