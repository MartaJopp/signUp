
var express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/signin'
    })
);

module.exports = router;