const NewsAPI = require('newsapi');
const uuid = require("uuid")
const news = require("./mongoose")
// const translateText = require("./translate")
const newsapi = new NewsAPI('e3cc4252264749dfba78dc4a8b3473f1');



function makeRequest(){
//     newsapi.v2.everything({ 
  
//         q: 'sport',
//        language: 'en',
//       sortBy: 'relevancy',
//       page: 2
//     }).then( async (response) => {
//       const articles = response.articles;
//       for (const article of articles){
//         try {
                
    
//             description = article['description'].substring(0, article['description'].indexOf("["));
//             content = article['content'].substring(0, article['content'].indexOf("["));
//           newsObject = {}
//           id =uuid.v4()
          
//           newsObject['author']=  await translateText(article['author'] , "am" )
//           newsObject['title'] = await translateText(article[ 'title'] ,  "am")
//           newsObject['description'] = await translateText(description ,  "am")
//           newsObject['content'] = await translateText(content, "am") 
//           newsObject['id'] = id
//           newsObject['image'] = article['urlToImage']
//           newsObject['date'] = article['publishedAt']
//           title = newsObject['title']

       
         
//           await news.findOneAndUpdate(
//             {title : title} , newsObject , {upsert : true}
//           )
       
//         } catch (error) {
           
            
//             // console.log(error)
//         }
    
//       }});
}

module.exports = makeRequest
