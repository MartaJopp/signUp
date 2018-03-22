var express = require('express'); // use express
var app = express();
var port = process.env.PORT || 5000; // listen on port 5000
var bodyParser = require('body-parser'); 

var registerRouter = require('./routes/register.router');


app.use(bodyParser.json());
// static files
app.use(express.static('server/public'));

app.use('/register', registerRouter);


app.listen(port, function () {
    console.log('Listening on port', port) // lets us know server is working
})