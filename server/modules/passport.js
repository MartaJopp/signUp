var config = require('./config.js'),
    LocalStrategy = require('passport-local').Strategy,
    // FacebookStrategy = require('passport-facebook').Strategy,
    // TwitterStrategy = require('passport-twitter').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    Model = require('./model.js'),
    bcrypt = require('bcrypt-nodejs'),
    User = Model.User;

/* dotenv fetches credentials stored in .env file*/
require('dotenv').config();


module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        Model.grabUserCredentials(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy(function (username, password, done) {
        new Model.User({ username: username }).fetch().then(function (data) {
            var user = data;
            if (user === null) {
                return done(null, false, { message: 'Invalid username or password' });
            } else {
                user = data.toJSON();
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, { message: 'Invalid password' });
                } else {
                    return done(null, user);
                }
            }
        });
    }));

    passport.use(new GoogleStrategy({
        clientID: config.googleAuth.clientID,
        clientSecret: config.googleAuth.clientSecret,
        callbackURL: config.googleAuth.callbackURL
    }, function (token, refreshToken, profile, done) {
        process.nextTick(function () {
            new Model.Google({ google_id: profile.id }).fetch().then(function (goUser) {
                if (goUser) {
                    return done(null, goUser);
                } else {
                    Model.createNewUser(function (newUserId) {
                        var newGOUser = {
                            id: newUserId,
                            token: token,
                            google_id: profile.id,
                            email: profile.emails[0].value,
                            display_name: profile.displayName
                        };

                        new Model.Google(newGOUser).save({}, { method: 'insert' }).then(function (newlyMadeGOUser) {
                            return done(null, newGOUser);
                        });
                    });
                }
            });
        });
    }));
}