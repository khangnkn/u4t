//passport.js
const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const mongoose = require('mongoose');
const AdminModel = require('./shared/models/admin.model');
const bcrypt = require('bcryptjs');

const RES_CONSTANT = require('./shared/constant/response_code');

passport.use(new LocalStrategy((username, password, done) => {
        AdminModel.findOne({username: username}, (err, admin) => {
            if (err) {
                return done(err, false, RES_CONSTANT.DB_ERROR);
            }
            if (!admin) {
                return done(null, false, RES_CONSTANT.USERNAME_NOT_EXIST);
            }
            if (!admin.password === password) {
                return done(null, false, RES_CONSTANT.PASSWORD_INCORRECT);
            }
            return done(null, admin, RES_CONSTANT.LOG_IN_SUCCESS)
        })
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return AdminModel.findById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
