import axios from "axios";
import map from "lodash/map";
import { reactLocalStorage } from "reactjs-localstorage";

const setData = (session) =>
  reactLocalStorage.setObject("pokerSession", session);

const getData = () => reactLocalStorage.getObject("pokerSession");

const saveSession = (uuid, data) => {
  const savedData = getData();
  let uuidData = savedData && savedData[uuid] ? savedData[uuid] : {};
  const payload = {
    ...savedData,
    [uuid]: {
      ...uuidData,
      ...data,
    },
  };
  setData(payload);
};

export const getSession = (uuid) => {
  const savedData = getData();
  return savedData && savedData[uuid] ? savedData[uuid] : null;
};

export const createSession = (userName, sessionName, sessionId, pollType) => {
  saveSession(sessionId, {
    creator: userName,
    sessionName,
    pollType,
    polls: [{ userName, card: "" }],
  });
};

export const joinSession = (userName, sessionId) => {
  const session = getSession(sessionId);
  const data = {
    ...session,
    polls: [...session.polls, { userName, card: "" }],
  };
  saveSession(sessionId, data);
};

export const pollToSession = (userName, sessionId, card) => {
  const session = getSession(sessionId);
  const polls = map(session.polls, (poll) => {
    if (poll.userName === userName) {
      return {
        ...poll,
        card,
      };
    }
    return poll;
  });
  const data = {
    ...session,
    polls,
  };
  saveSession(sessionId, data);
};

export const fetchPollTypesList = () => {
  return axios
    .get("http://127.0.0.1:3001/poker/sessionTypes")
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const savePollingSession = (userName, sessionName, pollTypeId) => {
  const apiPayload = {
    title: sessionName,
    creatorName: userName,
    sessionTypeId: pollTypeId,
  };
  return axios
    .post("http://127.0.0.1:3001/poker/", apiPayload)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
