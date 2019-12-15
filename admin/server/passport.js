//passport.js
const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const mongoose = require('mongoose');
const AdminModel = require('./models/Admin');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(
    (username, password, done) => {
        AdminModel.findOne({username}, (err, admin) => {
            if (err) {
                return done(err);
            }
            if (!admin) {
                return done(null, false);
            }
            if (!admin.password === password){
                return done(null, false);
            }
            return done(null, admin)
        })
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return UserModel.findById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));