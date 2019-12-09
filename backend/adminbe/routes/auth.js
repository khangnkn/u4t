//routes/auth.js
const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passport = require('passport');

const UserModel = require('../models/user');

/* POST login. */
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({user, token});
        });
    })(req, res);
});

router.post('/register', (req,res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                let error = 'Email Address Exists in Database.';
                return res.status(400).json(error);
            } else {
                const newUser = new UserModel({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    if(err) throw err;
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save().then(user => res.json(user))
                                .catch(err => res.status(400).json(err));
                        });
                });
            }
        });
});

module.exports = router