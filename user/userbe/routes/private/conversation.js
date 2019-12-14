const router = require('express').Router();
const { get, create } = require('../../controllers/conversations.controller');

router.get('/conversation', get);
router.post('/conversation', create);


module.exports = router;
