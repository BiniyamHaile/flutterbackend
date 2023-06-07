const express = require("express");
const playerPreferenceRouter = require("./playerPreferenceRouter");
const playerDataRouter = require("./playerDataRouter");
const teamRouter = require("./teamRoute");
const fixtureRouter = require("./fixtureRoute");
const router = express.Router();

// Mount player data router
router.use("/player-data", playerDataRouter);
router.use("/teams", teamRouter);
router.use("/fixtures", fixtureRouter);
router.use("/player-preferences", playerPreferenceRouter);

module.exports = router;
