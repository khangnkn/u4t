const express = require('express');
const { SearchHandler } = require('../../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', SearchHandler);

module.exports = router;
