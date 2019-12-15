const express = require('express');
const router = express.Router();

const admins = require('./admins.controller');
const users = require('./users.controller');
const skills = require('./skills.controller');
const contracts = require('./contracts.controller');
const complains = require('./complains.controller');
const revenues = require('./revenues.controller');

router.use('/admins', admins);
router.use('/users', users);
router.use('/skills', skills);
router.use('/contracts', contracts);
router.use('/complains', complains);
router.use('/revenues', revenues);

module.exports = router;

