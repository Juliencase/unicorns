const sql = require('./config/connect.js').sql

exports.comentArticle = function(callback){
  console.log("blabla");
  sql.query('SELECT article_coment.*, users.pseudo '+
             'FROM article_coment '+
             'JOIN users ON article_coment.id_user = users.id '

             ,function(err,result) {
    if(err){
      console.log(err)
    }else{
      callback(result)
    }
  })
}
