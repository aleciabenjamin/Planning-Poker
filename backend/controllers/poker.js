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
  const { userName, poll } = req.body;
  const { sessionId } = req.params;
  const where = {
    userName,
    sessionId,
  };

  return Polling.findOne({ where })
    .then((inst) => {
      if (inst) {
        return inst.update({ poll });
      } else {
        return Polling.create({ userName, poll, sessionId });
      }
    })
    .then((resp) => {
      return res.json(resp);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the session",
      });
    });
};

module.exports = {
  saveSession,
  getSession,
  getSessionByUuid,
  savePoll,
};
