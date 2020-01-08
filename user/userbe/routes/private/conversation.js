const router = require('express').Router();
const { GetConversation, CreateConversation, GetAllConversation } = require('../../controllers/conversations.controller');

router.get('/conversation/:id', GetConversation);
router.get('/conversation', GetAllConversation);
router.post('/conversation', CreateConversation);


module.exports = router;
