var express = require("express");
var router = express.Router();
var {
  saveSession,
  getSession,
  getSessionByUuid,
  savePoll,
	getPolls,
	getSessionTypes,
} = require("../controllers/poker");

router.route("/").post(saveSession);

router.route("/sessionTypes").get(getSessionTypes);

router.route("/:id").get(getSession);

router.route("/uuid/:uuid").get(getSessionByUuid);

router.route("/:sessionId/poll").post(savePoll).get(getPolls);

module.exports = router;
