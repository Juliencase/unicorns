const sql = require('./config/connect.js').sql

exports.addArticle = function(callback){


  sql.query('INSERT INTO articles SET ? ',function(err,results) {
    if(err){
      console.log(err)
    }else{
      callback(results)
    }
  })
}
