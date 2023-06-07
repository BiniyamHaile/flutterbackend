const Team = require("../models/team");

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve teams" });
  }
};

module.exports = {
  getAllTeams,
};
