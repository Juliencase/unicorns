var logUser = require('./../mySQL/logUser.js').logUser

//-----------------------------------------------login page call------------------------------------------------------

exports.login = function(req, res){
   var message = '';
   var sess = req.session;
   console.log('DEBUT LOGIN')

   if(req.method == "POST"){
      var post  = req.body;
      var login= post.login;
      var pass= post.password;
      var results = post;

      logUser(login,pass,function(results){
        console.log("RETOUR SQL");
         if(results != undefined && results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            req.app.locals.connection = 1 ;
            console.log('RETOUR REUSSITE LOGIN')
            res.redirect('/');
          }else{
            message = 'erreur de Login/Mot de passe';
            console.log('FIN ERREUR')
            res.render('index.ejs',{message: message});
          }
    });

   } else {
     console.log('FIN NO POST')
      res.render('login.ejs',{message: message});
   }
};
