const router = require('express').Router();
const { CreateContract } = require('../../controllers/contract.controller');

router.post('/', CreateContract);

module.exports = router;
