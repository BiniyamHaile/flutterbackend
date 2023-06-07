const news = require("./mongoose")
const cors = require("cors")
const express = require("express")
const League  = require("./leagues")
const getMatchesByLeagueId = require("./models/matches.model")

require("dotenv").config()
    
const app  = express()


app.use(express.json())

app.use(cors())      
  
app.get("/news" , async(req ,res)=>{
    console.log("incoming request.......")
  
    const pageNumber  = req.query.page || 1; 
    const pageSize = 5;
    const skip = (pageNumber - 1) * pageSize;
    try {
        newsResult = await  news.find({} , {description : 0 , _id : 0  }).limit(pageSize).skip(skip)
     
        
        return res.status(200).json(newsResult)
      
    } catch (error) {
        console.log(error)
       return  res.status(400).json({"ok" : false})

    }
   
}) 


app.get("/details/:id" , async(req , res)=>{
       
        try {
            id = req.params.id
           newsDetail =  await news.find({id : id});
         
          return res.status(201).json(newsDetail)
        } catch (error) {
            console.log(error) 
            res.status(400).json({"ok": false})
        }
}

)

app.get("/" , (req , res)=>{
 
})
app.get("/standings/:leagueid" , async(req, res)=>{
   
    try{
        leagueid=  req.params.leagueid
            console.log(leagueid)
        standings = await League.findOne({id : leagueid})

       return res.status(200).json(standings);

    }catch(e){
        console.log(e)
        res.status(400).json({ok : false});
    }
})

app.get("/fixtures/:leagueId" , async(req, res)=>{
    console.log("request for fixture is coming ....")
    leagueid = req.params.leagueId
      try {
        result=   await getMatchesByLeagueId(leagueid);
        console.log("returned")
        console.log(result)
        return res.status(200).json(result)
      } catch (error) {
        console.log(error)
        return res.status(400).json({})
      }

})


module.exports =  app  
