//routes/auth.js
const express = require('express');
const router = express.Router();

const ComplainService = require('../services/complain.service');

router.get('/:page/:complainsPerPage', (req, res) => {
    res.json('/:page/:complainsPerPage');
});

module.exports = router;
