const router = require('express').Router();
const { GetConversation, CreateConversation } = require('../../controllers/conversations.controller');

router.get('/conversation', GetConversation);
router.post('/conversation', CreateConversation);


module.exports = router;
