const express = require('express');
const router = express.Router();

const admins = require('./admins');
const users = require('./users');
const skills = require('./skills');
const contracts = require('./contracts');
const complains = require('./complains');
const revenues = require('./revenues');

router.use('/admins', admins);
router.use('/users', users);
router.use('/skills', skills);
router.use('/contracts', contracts);
router.use('/complains', complains);
router.use('/revenues', revenues);

module.exports = router;

