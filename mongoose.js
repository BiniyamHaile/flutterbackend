
const mongoose = require("mongoose")
const newsSchema = new mongoose.Schema({
    source  : {type : String  , required : true} , 
    author : {type : String , required : true} , 
    title : {type : String , required : true},
    description : {type : String , required : true},
    image : {type : String , required : true} , 
    publishedDate : {type : String}, 
    content : {type : String , required : true} , 
    id : {type : String , required : true}

})



   
module.exports = mongoose.model("news" , newsSchema); 