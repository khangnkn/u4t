const express = require('express');
const UserRoutes = require('./users');
const CityRoutes = require('./city');
const SkillRoutes = require('./skill');

const router = express.Router();

router.use('/auth', UserRoutes);
router.use('/cities', CityRoutes);
router.use('/skills', SkillRoutes);

module.exports = router;
