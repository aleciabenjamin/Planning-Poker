var express = require("express");
var router = express.Router();
var { saveSession } = require("../controllers/poker");

router.post("/", saveSession);

module.exports = router;
