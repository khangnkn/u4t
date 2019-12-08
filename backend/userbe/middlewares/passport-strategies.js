const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('../utils/config');

passport.use('local', new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err != null) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    return bcrypt.compare(password, user.password, (error, result) => {
      if (error) {
        return done(error);
      }
      if (result === false) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
}));

passport.use('google', new GoogleStrategy({
  clientID: config.clientid,
  clientSecret: config.clientsecret,
  callbackURL: config.authcallback,
},
(token, refreshToken, profile, done) => done(null, {
  profile,
  token,
})));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
  done(null, user);
});
