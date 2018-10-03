/**
* Module dependencies.
*/
var express = require('express')
  // , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , home = require('./routes/home.js')
  , login = require('./lib/login.js')
  , logout = require('./lib/logout.js')


var moment = require('moment');
moment.locale('fr');
var session = require('express-session')
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.locals.connection = 0;
app.locals.moment = require('moment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: true,
              saveUninitialized: true,
              cookie: { maxAge: 30*24*60*60*1000 }
            }));


// development only
app.get('/', home);//call for main home page
app.get('/login', login.login);//call for login page
app.post('/login', login.login); //call for login post
app.use('/home',home);
app.get('/logout', logout.logout)

//Middleware

app.listen(8080, function(){
  console.log("Lancement port 8080")
})
