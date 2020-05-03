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

router.route("/:id").get(getSession);

router.route("/uuid/:uuid").get(getSessionByUuid);

router.route("/:sessionId/poll").post(savePoll).get(getPolls);

router.route("/sessionTypes").get(getSessionTypes);

module.exports = router;
