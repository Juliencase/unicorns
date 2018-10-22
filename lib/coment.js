var addComent = require('./../mySQL/addArticle.js').addComent

exports.coment = function(req, res){
   message = '';
   if(req.method == "POST"){
     var now = moment();
     let comentArticle = {}
     let post = req.body;

     comentArticle.text = post.text;
     comentArticle.date_coment = now();
     comentArticle.id_user = req.session.userId;
     comentArticle.id_article = req.session.articleId;

     var userId = req.session.userId;
     var articleId = req.session.articleId;

     addComent(comentArticle,function(results){
     message = "Votre commentaire a bien été pris en compte.";
     res.render('index.ejs',{message: message});

      });

   } else {
      res.render('index.ejs');
   }
};
