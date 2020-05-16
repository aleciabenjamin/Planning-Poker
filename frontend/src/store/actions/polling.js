import * as api from "api";
import {
  SET_POLLS,
  SET_POLL_TYPE,
  SET_POLL_TYPES_LIST,
  SET_SESSION_ID,
  SET_SESSION_NAME,
  SET_SESSION_UUID,
  SET_USER_NAME,
} from "store/actions/types";

export const setPollType = (pollType) => {
  return { type: SET_POLL_TYPE, pollType };
};

export const setSessionId = (sessionId) => {
  return { type: SET_SESSION_ID, sessionId };
};

export const setsessionUuId = (sessionUuId) => {
  return { type: SET_SESSION_UUID, sessionUuId };
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
  const { pollType, pollTypesList, sessionUuId } = getState().polling;
  const selectedPoll = pollTypesList.find(
    (poll) => poll.title.toLowerCase() === pollType.toLowerCase()
  );
  if (selectedPoll && selectedPoll.id)
    return api
      .savePollingSession(title, sessionUuId, creatorName, selectedPoll.id)
      .then((apiResponse) => {
        dispatch(setSessionId(apiResponse.id));
        dispatch(setUserName(apiResponse.creatorName));
        dispatch(setSessionName(apiResponse.title));
        return apiResponse.uuid;
      })
      .catch((apiError) => {
        console.log(apiError);
      });
};

export const savePollToSessionAction = (userName, poll) => (
  dispatch,
  getState
) => {
  const { sessionId } = getState().polling;
  return api
    .savePollToSession(userName, poll, sessionId)
    .then((apiResponse) => {
      return apiResponse.id;
    })
    .catch((apiError) => {
      console.log(apiError);
    });
};

export const getSessionPollsAction = (sessionId) => (dispatch, getState) => {
  return api
    .getSessionPolls(sessionId)
    .then((apiResponse) => {
      return apiResponse;
    })
    .catch((apiError) => {
      return Promise.reject(apiError);
    });
};

export const setsessionByUuIdAction = (uuId) => (dispatch, getState) => {
  return api
    .getSessionByUuid(uuId)
    .then((apiResponse) => {
      dispatch(setSessionId(apiResponse.id));
      dispatch(setsessionUuId(uuId));
      dispatch(setSessionName(apiResponse.title));
      dispatch(setPollType(apiResponse.SessionType.title));
      return apiResponse.id;
    })
    .catch((apiError) => {
      return Promise.reject(apiError);
    });
};
