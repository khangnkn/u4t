const router = require('express').Router();
const upload = require('../../utils/multer-avatar');
const { UpdateUserInfo, GetInfoHandler } = require('../../controllers/users.controller');


router.post('/info', upload.single('avatar'), UpdateUserInfo);
router.get('/info', GetInfoHandler);

module.exports = router;
