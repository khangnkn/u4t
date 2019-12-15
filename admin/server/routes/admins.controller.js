const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const AdminService = require('../services/admin.service');

const {ResponseFormat} = require('../core');

router.post('/login', function (req, res) {
    passport.authenticate('local', {session: false},
        (err, admin, info) => {
            if (err || !admin) {
                return res.status(401).json(
                    ResponseFormat.error(info.code, info.message, null)
                );
            }
            req.login(admin, {session: false}, (err) => {
                if (err) {
                    return res.status(401).json(
                        ResponseFormat.error('UK0', err.message, err)
                    );
                }
                const _admin = {
                    username: admin.username
                };

                const token = jwt.sign(_admin, process.env.JWT_SECRET);
                return res.status(200).json(
                    ResponseFormat.login_success({
                        jwt: token
                    })
                );
            });
        })(req, res);
});

router.post('/', async (req, res) => {
    try {
        let result = await AdminService.addNew(req.body);
        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(201).json(
                ResponseFormat.success(result.res.code, result.res.message, null)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

module.exports = router;
