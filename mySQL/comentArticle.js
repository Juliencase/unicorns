const sql = require('./config/connect.js').sql

exports.comentArticle = function(id_article,callback){
  sql.query('SELECT *,users.pseudo ' +
            'FROM article_coment ' +
            'INNER JOIN article.users ON article_coment.user = users.id ' +
            'WHERE article_coment.id_article = ?',[id_article],function(err,result) {
               if(err) {
                 console.log(err);
               }else {
                 callback(result)
               }
             })
           }
