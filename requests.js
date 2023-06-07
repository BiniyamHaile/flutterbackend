const League = require("./leagues")
const axios = require('axios');
async function fetchStanding(leagueId){
    const config = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/standings',
        params: { league: `${leagueId}` , season : "2022"},
        headers: {
          
          'x-rapidapi-key': '373145c158a54c630c57f0af6bc798f4'
        }
      };
 
      
    apiresponse = await axios(config)
      .then(function (response) {
        return response.data })
 const LeagueData = apiresponse["response"][0]["league"]["standings"];

    
    await League.findOneAndUpdate(
      { id: leagueId }, 
      { standings: LeagueData }, 
      { upsert: true } 
    );
    
   
      
         
      }
module.exports = fetchStanding;