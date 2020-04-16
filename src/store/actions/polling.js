import { SET_POLL_TYPE, SET_SESSION_ID, SET_USER_NAME, SET_SESSION_NAME } from "store/actions/types";

export const setPollType = (pollType) => {
  return { type: SET_POLL_TYPE, pollType };
};

export const setSessionId = (sessionId) => {
  return { type: SET_SESSION_ID, sessionId };
};

export const setSessionName = (sessionName) => {
	return { type: SET_SESSION_NAME, sessionName };
};

export const setUserName = (userName) => {
	return { type: SET_USER_NAME, userName };
};
