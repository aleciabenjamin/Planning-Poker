import * as api from "api";
import {
  SET_POLL_TYPE,
  SET_SESSION_ID,
  SET_USER_NAME,
  SET_SESSION_NAME,
  SET_POLLS,
  SET_POLL_TYPES_LIST,
} from "store/actions/types";

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

export const setPolls = (polls) => {
  return { type: SET_POLLS, polls };
};

export const setPollTypesList = (pollTypesList) => {
  return { type: SET_POLL_TYPES_LIST, pollTypesList };
};

export const fetchPollTypesListAction = () => (dispatch) => {
  return api
    .fetchPollTypesList()
    .then((apiResponse) => {
      dispatch(setPollTypesList(apiResponse));
    })
    .catch((apiError) => {
      console.log(apiError);
    });
};

export const saveSessionAction = (title, creatorName) => (
  dispatch,
  getState
) => {
  const { pollType, pollTypesList } = getState().polling;
  const selectedPoll = pollTypesList.find(
    (poll) => poll.title.toLowerCase() === pollType.toLowerCase()
  );
  return api
    .savePollingSession(title, creatorName, selectedPoll.id)
    .then((apiResponse) => {
			dispatch(setSessionId(apiResponse.id));
			dispatch(setUserName(apiResponse.creatorName));
			dispatch(setSessionName(apiResponse.title));
			return apiResponse.id;
		})
    .catch((apiError) => {
      console.log(apiError);
    });
};
