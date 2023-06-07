const axios = require('axios');
async function fetchStanding(playerId){
    const config = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/players',
        params: { id: `${playerId}` , season : "2022"},
        headers: {
          
          'x-rapidapi-key': '373145c158a54c630c57f0af6bc798f4'
        }
      };
 
      
    apiresponse = await axios(config)
      .then(function (response) {
        return response.data })
//  const playerData = apiresponse["response"][0]["player"]["standings"];

    
    // await player.findOneAndUpdate(
    //   { id: playerId }, 
    //   { standings: playerData }, 
    //   { upsert: true } 
    // );
    console.log(apiresponse)
   
      
         
      }

fetchStanding(280)