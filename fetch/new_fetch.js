const axios = require('axios');
const Match = require('../schemas/match_schema');

async function fetchFixturesByLeagueId(leagueId) {
  const config = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures',
    params: { league: `${leagueId}`, season: '2022', last: 18 },
    headers: {
      'x-rapidapi-key': '373145c158a54c630c57f0af6bc798f4',
    },
  };

  try {
    const response = await axios(config);

    if (response.status === 200) {
      console.log(response.data);
      const fixtures = response.data.response;

      
        fixtures.map(async (data) => {
          const { id ,referee , timezone , date , venue , status} = data.fixture;
          const {league, teams, goals, score } = data

          const matchData = {
            id,
            referee,
            timezone,
            date,
            venue,
            status,
            league,
            teams,
            goals,
            score,
          };

          await Match.findOneAndUpdate({ id: matchData.id }, matchData, { upsert: true });
        })
    
    }
  } catch (e) {
    console.log(e);
  }
}
module.exports = fetchFixturesByLeagueId;
 