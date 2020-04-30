var express = require("express");
var router = express.Router();
var { saveSession, getSession } = require("../controllers/poker");

router.route("/").post(saveSession);

router.route("/:id").get(getSession);

router.post("/poll", function (req, res, next) {
  res.json({ content: "Poll To Poker Session." });
});

router.post("/poll", function (req, res, next) {
  res.json({ content: "Poll To Poker Session." });
});

module.exports = router;
