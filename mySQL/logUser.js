const sql = require('./config/connect.js').sql

exports.logUser = function(name,pass,callback){

  console.log('REQUETE')
  sql.query('SELECT * FROM users WHERE login =? AND password =?',[login,pass],function(err,result) {
    if(err){
      console.log(err)
    }else{
      callback(result)
    }
  })
}
