var express = require('express');
var router = express.Router();
var home = require('./../lib/home.js');
var login = require('./../lib/login.js');
var logout = require('./../lib/logout.js');
var showComent = require('./../lib/showComent.js');

router.get('/logout', logout.logout);//call for logout
router.get('/',home.home,function(result){
    res.render('index.ejs');
  });

router.get('/login', function (req, res) {
  res.send('login');
  });

router.get('/article/:id',showComent.showComent,function (req,res,callback) {
  res.render('coment.ejs');
});

module.exports = router;
