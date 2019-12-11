const express = require('express');
const userRoutes = require('./users');
const cityRoutes = require('./city');

const router = express.Router();

router.use('/auth', userRoutes);
router.use('/cities', cityRoutes);

module.exports = router;
