//-----------------------------------------------article page ----------------------------------------------
var moment = require('moment');
var getArticle = require('./../mySQL/getArticle').getArticle

exports.home = function(req,res,callback){
   getArticle(function(result){
     res.render('index.ejs',{data:result})
   })
};
