//passport.js
const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const mongoose = require('mongoose');
const UserModel = require('./models/Admin');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return UserModel.findOne({email})
            .then(user => {
                console.log(user)
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email'});
                }
                bcrypt.compare(password, user.password)
                    .then(isMath => {
                            if (isMath) {
                                const payload = {
                                    id: user._id,
                                    email: user.email
                                };
                                return cb(null, payload, {message: 'Logged In Successfully'});
                            }else {
                                return cb(null, false, {message: 'Incorrect password.'});
                            }
                        }
                    );
            })
            .catch(err => cb(err));
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