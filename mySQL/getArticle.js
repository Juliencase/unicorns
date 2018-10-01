const sql = require('./config/connect.js').sql

exports.getArticle = function(callback){
  sql.query('SELECT articles.*,article_category.name '+
             'FROM articles '+
             'JOIN article_category ON articles.category = article_category.id '+
             'ORDER BY date_create',function(err,result) {
    if(err){
      console.log(err)
    }else{
      callback(result)
    }
  })
}
