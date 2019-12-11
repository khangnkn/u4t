const express = require('express');
const userRoutes = require('./users');

const router = express.Router();

router.use('/auth', userRoutes);

module.exports = router;
