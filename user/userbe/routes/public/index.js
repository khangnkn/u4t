const express = require('express');
const UserRoutes = require('./auth');
const AuthRoutes = require('./city');
const SkillRoutes = require('./skill');
const LevelRoutes = require('./level');
const TutorRoutes = require('./tutor');

const router = express.Router();

router.use('/auth', UserRoutes);
router.use('/cities', AuthRoutes);
router.use('/skills', SkillRoutes);
router.use('/levels', LevelRoutes);
router.use('/tutors', TutorRoutes);

module.exports = router;
