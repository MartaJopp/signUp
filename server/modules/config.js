
/* dotenv fetches credentials stored in .env file*/
require('dotenv').config();

var port = 1337;
var CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
var CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

module.exports = {
    'port': port,
    'googleAuth': {
        'clientID': CLIENT_ID,
        'clientSecret': CLIENT_SECRET,
        'callbackURL': 'http://localhost:' + port + '/auth/google/callback'
    }

    // googleAuth.clientID



};