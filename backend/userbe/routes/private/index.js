const express = require('express');

const router = express.Router();
const publicRoutes = require('./public');
const userRoutes = require('./users');
const tokenAuth = require('../middlewares/bearer-auth');

router.use('/', publicRoutes);
router.use('/users', tokenAuth, userRoutes);

module.exports = router;
