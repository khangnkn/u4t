const express = require('express');
const { TopTutor } = require('../../controllers/tutor.controller');

const router = express.Router();

/* GET users listing. */
router.get('/top', TopTutor);

module.exports = router;
