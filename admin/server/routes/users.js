//routes/auth.js
const express = require('express');
const router = express.Router();

const UserService = require('../services/user');

// Get user list
router.get('/:userType/:page/:usersPerPage', async (req, res) => {
    return res.json('/:userType/:page/:usersPerPage');
});

// Get user detail
router.get('/:userName/detail', async (req, res) => {
    return res.json('/:userName/detail');
});

// Lock user
router.put('/lock-account', async (req, res) => {
    return res.json('/lock-account');
});

// Unlock user
router.put('/unlock-account', async (req, res) => {
    return res.json('/unlock-account');
});

module.exports = router;
