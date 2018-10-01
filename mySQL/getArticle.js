const sql = require('./config/connect.js').sql

exports.getArticle = function(callback){
  sql.query('SELECT articles.*,article_category.name as category_name, users.pseudo '+
             'FROM articles '+
             'JOIN article_category ON articles.category = article_category.id '+
             'JOIN users ON articles.author = users.id ',function(err,result) {
    if(err){
      console.log(err)
    }else{
      console.log(result)
      callback(result)
    }
  })
}
