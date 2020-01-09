const router = require('express').Router();
const { CreateContract, GetAllContracts, ChangeStatusHandler } = require('../../controllers/contract.controller');

router.post('/', CreateContract);
router.get('/', GetAllContracts);
router.post('/status/:id', ChangeStatusHandler);
module.exports = router;
