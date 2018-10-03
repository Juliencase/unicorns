//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
     console.log(req.app.locals.connection);
     req.app.locals.connection = 0;
      res.redirect("/home");
   })
};
