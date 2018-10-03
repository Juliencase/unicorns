const sql = require('./config/connect.js').sql

exports.logUser = function(login,password,callback){
  console.log('REQUETE')
  sql.query('SELECT * FROM users WHERE login =? AND password =?',[login,password],function(err,result) {
    if(err){
      console.log(err)
    }else{
      callback(result)
    }
  })
}
