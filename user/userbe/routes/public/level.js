const express = require('express');
const LevelController = require('../../controllers/level.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', LevelController.GetAll);

module.exports = router;
