const express = require('express');
const userRoutes = require('./user');
const messageRoutes = require('./messaging');
const conversationRoutes = require('./conversation');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/m', messageRoutes, conversationRoutes);

module.exports = router;
