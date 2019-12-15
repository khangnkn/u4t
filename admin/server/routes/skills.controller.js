//routes/auth.js
const express = require('express');
const router = express.Router();

const SkillService = require('../services/skill.service');

router.get('/:page/:skillsPerPage', (req, res) => {
    res.json('/:page/:skillsPerPage');
});

module.exports = router;
