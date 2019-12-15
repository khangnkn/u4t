//routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const AdminService = require('../services/admin');


router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false},
        (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
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

router.post('/', async (res, req) => {
    return req.json('add new admin');
    // let result = await AdminService.addNew(res.body);
    // if (result.err) {
    //     return req.json(result.err);
    // } else {
    //     return req.json(result.res);
    // }
});

module.exports = router;
