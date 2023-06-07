const mongoose = require("mongoose");

const playerPreferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  season: {
    type: Number,
    required: true,
  },
  league: {
    type: Number,
    required: true,
  },
  image: String,
});

const PlayerPreference = mongoose.model(
  "PlayerPreference",
  playerPreferenceSchema
);

module.exports = PlayerPreference;
