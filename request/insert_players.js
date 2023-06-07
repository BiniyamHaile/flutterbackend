const PlayerPreference = require("../models/player")

const playerPreferences = [
    {
      name: "Neymar",
      season: 2022,
      league: 61,
      image: "https://media-1.api-sports.io/football/players/276.png",
    },
    {
      name: "Messi",
      season: 2022,
      league: 61,
      image: "https://media-1.api-sports.io/football/players/154.png",
    },
    {
      name: "Cristiano Ronaldo",
      season: 2022,
      league: 307,
      image: "https://media-1.api-sports.io/football/players/874.png",
    },
  ];
  
  async function insertPlayerPreferences() {
    console.log("called")
    try {
      for (const preference of playerPreferences) {
       const PlayerPreference = await PlayerPreference.findOneAndUpdate(preference);
       PlayerPreference.save()
      }
      console.log("Player preferences inserted successfully!");
    } catch (error) {
      console.error("Failed to insert player preferences", error);
    }
  }

  module.exports = insertPlayerPreferences