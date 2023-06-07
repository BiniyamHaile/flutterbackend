const Profile = require("../models/playerProfileSchema");
const Stats = require("../models/playerStatsSchema");

async function getPlayerData(req, res) {
  try {
    const { search, league, season } = req.query;
    console.log(search, league, season);

    // Create an empty filter object
    const filter = {};

    // Add the search parameter to the filter if it exists
    if (search) {
      filter.name = search;
    }

    // Add the league parameter to the filter if it exists
    if (league) {
      filter.leagueid = league;
    }

    // Add the season parameter to the filter if it exists
    if (season) {
      filter.season = String(season);
    }

    // Fetch player data based on the filter and populate the stats field
    const playerData = await Profile.find(filter).populate("stats");
    console.log(playerData);
    res.status(200).json(playerData);
  } catch (error) {
    console.error("Failed to fetch player data", error);
    res.status(500).json({ error: "Failed to fetch player data" });
  }
}

async function getPlayerStats(req, res) {
  try {
    const { statId } = req.params;

    // Fetch stats data based on the provided statId
    const playerStats = await Stats.findById(statId);

    res.json(playerStats);
  } catch (error) {
    console.error("Failed to fetch player stats", error);
    res.status(500).json({ error: "Failed to fetch player stats" });
  }
}

module.exports = {
  getPlayerData,
  getPlayerStats,
};
