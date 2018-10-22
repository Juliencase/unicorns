const sql = require('./config/connect.js').sql

exports.addArticle = function(comentArticle,callback){


  sql.query('INSERT INTO articles SET ? ',comentArticle,function(err,results) {
    if(err){
      console.log(err)
    }else{
      callback(results)
    }
  })
}
