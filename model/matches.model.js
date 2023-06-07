const Match = require('../schemas/match_schema');

async function getMatchesByLeagueId(leagueId) {
    try {
      const matches = await Match.find({ 'league.id': leagueId }).limit(8);
      return matches;
    } catch (error) {
      
      console.error(error);
      throw error;
    }
  }
  module.exports = getMatchesByLeagueId