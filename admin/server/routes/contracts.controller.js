//routes/auth.js
const express = require('express');
const router = express.Router();

const ContractService = require('../services/contract.service');

router.get('/:page/:contractsPerPage', (req, res) => {
    res.json('/:page/:contractsPerPage');
});

module.exports = router;
