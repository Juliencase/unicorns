const sql = require('./config/connect.js').sql

exports.addComent = function(comentArticle,callback){

  sql.query('INSERT INTO article_coment SET ? ',[comentArticle],function(err,results) {
    if(err){
      console.log(err)
    }else{
      callback(results)
    }
  })
}
