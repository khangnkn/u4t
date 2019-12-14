const express = require('express');
const CityController = require('../../controllers/cities.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', CityController.getAll);

module.exports = router;
