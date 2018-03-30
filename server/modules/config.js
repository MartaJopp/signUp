var port = 1337;
var CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
var CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

module.exports = {
    'port': port,
    'googleAuth': {
        'clientID': process.env.GOOGLE_CLIENT_ID,
        'clientSecret': process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL': 'http://localhost:' + port + '/auth/google/callback'
    }




};