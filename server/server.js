var express = require('express'); // use express
var app = express();
var port = process.env.PORT || 5000; // listen on port 5000
var bodyParser = require('body-parser'); 
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var session = require('express-session');
var Model = require('./modules/model');
var router = require('./routes/router.js');
var auth = require('./routes/auth.js');


var passport = require('./modules/passport.js')(passport);


var registerRouter = require('./routes/register.router');




app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'hamster kitten fight'
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', router);
app.use('/auth', auth);
// static files
app.use('/register', registerRouter);


app.listen(port, function () {
    console.log('Listening on port', port) // lets us know server is working
})