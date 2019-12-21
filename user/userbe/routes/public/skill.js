const express = require('express');
const SkillController = require('../../controllers/skill.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', SkillController.GetAll);

module.exports = router;
