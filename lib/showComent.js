//-----------------------------------------------Coment page ----------------------------------------------
var moment = require('moment');
var comentArticle = require('./../mySQL/comentArticle').comentArticle


exports.showComent = function(id_article, res){
comentArticle(id_article, function (result) {
  console.log(result);
  res.render('coment.ejs',{data : result})
})

};
// showComent(req.params.id,res)
//
// showComent('remi',5)
