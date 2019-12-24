const express = require('express');
const AuthRoutes = require('./auth');
const CityRoutes = require('./city');
const SkillRoutes = require('./skill');
const LevelRoutes = require('./level');
const TutorRoutes = require('./tutor');
const UserRoutes = require('./user');
const SearchRoutes = require('./search');

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/cities', CityRoutes);
router.use('/skills', SkillRoutes);
router.use('/levels', LevelRoutes);
router.use('/tutors', TutorRoutes);
router.use('/users', UserRoutes);
router.use('/search', SearchRoutes);


module.exports = router;
