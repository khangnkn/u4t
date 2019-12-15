const router = require('express').Router();
const SC = require('http-status-codes');
const passport = require('passport');

const Error = require('../../utils/error');
const { LoginHandler, RegisterHandler } = require('../../controllers/auth.controller');

/* GET users listing. */
router.post('/login', LoginHandler);

router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile'],
}));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user) => {
    if (err) {
      return next({
        status: SC.UNAUTHORIZED,
        code: Error.UnknownError,
        message: 'cannot authenticate user',
      });
    }
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'successfully authenticated',
      data: user,
    });
  })(req, res, next);
});

router.post('/register', RegisterHandler);

module.exports = router;
