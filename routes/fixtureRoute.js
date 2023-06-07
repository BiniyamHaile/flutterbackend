const express = require("express");
const fixtureController = require("../controller/fixtureController");

const router = express.Router();

router.get("/", fixtureController.getFixturesByTeamName);

module.exports = router;
