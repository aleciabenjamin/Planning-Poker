var { Session, SessionType, Polling } = require("../models");

const saveSession = (req, res, next) => {
  console.log(req.body);
  return Session.create(req.body)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the session.",
      });
    });
};

const getSession = (req, res, next) => {
  return Session.findByPk(req.params.id, {
    include: [{ model: SessionType }],
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the session",
      });
    });
};

const getSessionByUuid = (req, res, next) => {
  return Session.findOne({
    where: {
      uuid: req.params.uuid,
    },
    include: [{ model: SessionType }],
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while fetching the session by uuid",
      });
    });
};

const savePoll = (req, res, next) => {
  const payload = {
    userName: req.body.userName,
    poll: req.body.poll,
    sessionId: req.params.sessionId,
  };
  return Polling.create(payload)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Session.",
      });
    });
};


const getPolls = (req, res, next) => {
  return Polling.findAll({
    where: {
      sessionId: req.params.sessionId,
    },
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while fetching the polls",
      });
    });
};

module.exports = {
  saveSession,
  getSession,
  getSessionByUuid,
  savePoll,
  getPolls,
};
