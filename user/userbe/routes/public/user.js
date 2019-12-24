const express = require('express');
const { UserDetailHandler } = require('../../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/:id', UserDetailHandler);

module.exports = router;
