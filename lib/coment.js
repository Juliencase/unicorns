var addComent = require('./../mySQL/addComent.js').addComent
var moment = require('moment');

exports.coment = function(req, res){
   message = '';
   if(req.method == "POST"){
     var now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
     let post = req.body;
     let comentArticle = {}

     comentArticle.text = post.coment;
     comentArticle.date_coment = now;
     comentArticle.user = req.session.userId;
     comentArticle.id_article = req.body.Idarticle;


     addComent(comentArticle,function(results){
     message = "Votre commentaire a bien été pris en compte.";
     res.redirect('/',{message : message},{data : results});

      });
   } else {
      res.render('index.ejs');
   }
};
