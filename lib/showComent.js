//-----------------------------------------------Coment page ----------------------------------------------
var moment = require('moment');
var comentArticle = require('./../mySQL/comentArticle').comentArticle

exports.showComent = function(req,res,callback){
   comentArticle(function(result){
     console.log(req,res,callback);
     res.render('coment.ejs',{data:result})
     console.log(result);
   })
};
