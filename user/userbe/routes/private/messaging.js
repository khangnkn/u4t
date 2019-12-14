const router = require('express').Router();
const { create } = require('../../controllers/messages.controller');

router.post('/message', create);

module.exports = router;
