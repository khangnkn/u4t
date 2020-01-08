const express = require('express');
const userRoutes = require('./user');
const messageRoutes = require('./messaging');
const conversationRoutes = require('./conversation');
const contractRoutes = require('./contract');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/contracts', contractRoutes);
router.use('/m', messageRoutes, conversationRoutes);

module.exports = router;
