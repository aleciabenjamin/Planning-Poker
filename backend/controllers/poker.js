var { Session } = require("../models");

const saveSession = (req, res, next) => {
  console.log(req.body);
  return Session.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the session.",
      });
    });
};

module.exports = {
  saveSession,
};
