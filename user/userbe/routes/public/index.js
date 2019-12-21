const express = require('express');
const UserRoutes = require('./users');
const CityRoutes = require('./city');
const SkillRoutes = require('./skill');
const LevelRoutes = require('./level');

const router = express.Router();

router.use('/auth', UserRoutes);
router.use('/cities', CityRoutes);
router.use('/skills', SkillRoutes);
router.use('/levels', LevelRoutes);

module.exports = router;
