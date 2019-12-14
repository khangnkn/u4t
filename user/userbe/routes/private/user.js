const router = require('express').Router();
const upload = require('../../utils/multer-avatar');
const { UpdateUserInfo } = require('../../controllers/users.controller');


router.post('/info', upload.single('avatar'), UpdateUserInfo);

module.exports = router;
