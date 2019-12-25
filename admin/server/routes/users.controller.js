//routes/auth.js
const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');

const {ResponseFormat} = require('../core');

router.post('/', async (req, res) => {
    try {
        let result = await UserService.addNew(req.body);
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


// Get user list
router.get('/:role/:page/:limit', async (req, res) => {
    try {
        const _payload = {
            role: req.params.role,
            page: req.params.page,
            limit: req.params.limit
        };

        const result = await UserService.getUserList(_payload);

        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

// Get user detail
router.get('/detail/:userName', async (req, res) => {
    try {
        const _payload = {
            username: req.params.userName
        };

        const result = await UserService.getUserDetail(_payload);

        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

// Lock user
router.put('/lock/:username', async (req, res) => {
    try {
        const _payload = {
            isActive: false,
            username: req.params.username
        };

        const result = await UserService.updateActiceUser(_payload);

        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

// Unlock user
router.put('/unlock/:username', async (req, res) => {
    try {
        const _payload = {
            isActive: true,
            username: req.params.username
        };

        const result = await UserService.updateActiceUser(_payload);

        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

module.exports = router;
