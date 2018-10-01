var express = require('express');
var router = express.Router();
var home = require('./../lib/home.js');
var login = require('./../lib/login.js');
var logout = require('./../lib/logout.js');

router.get('/logout', logout.logout);//call for logout
router.get('/',home.home(res,req,function(result){
    res.render('index.ejs');
  }));

module.exports = router;
