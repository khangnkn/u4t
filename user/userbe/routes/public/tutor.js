const express = require('express');
const { TopTutor, DetailTutor } = require('../../controllers/tutor.controller');

const router = express.Router();

/* GET users listing. */
router.get('/top', TopTutor);
router.get('/:id', DetailTutor);

module.exports = router;
