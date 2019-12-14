const router = require('express').Router();
const { CreateMessage } = require('../../controllers/messages.controller');

router.post('/message', CreateMessage);

module.exports = router;
