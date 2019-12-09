const express = require('express');
const SC = require('http-status-codes');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Error = require('../../utils/error');

const router = express.Router();
const secret = require('../../utils/secret');
const User = require('../../models/User');
const { salt } = require('../../utils/config');
const validation = require('../../utils/validation/register');

/* GET users listing. */
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err != null) {
      return next({
        code: Error.UnknownError,
        message: err,
      });
    }
    if (user === false) {
      return next({
        status: SC.UNAUTHORIZED,
        code: Error.AuthenticationFailed,
        message: 'username or password not correct',
      });
    }
    const token = jwt.sign({ user }, secret, { expiresIn: 86400 });
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: {
        user,
        token,
      },
    });
  })(req, res, next);
});

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

router.post('/register', (req, res, next) => {
  const { body } = req;
  const validatingResult = validation(body);
  if (!validatingResult.valid) {
    return next({
      status: SC.BAD_REQUEST,
      code: validatingResult.error,
      message: validatingResult.message,
    });
  }
  User.findOneAndRemove({ username: body.username })
    .then((user) => {
      if (user) {
        return next({
          status: SC.BAD_REQUEST,
          code: Error.AccountExisted,
          message: 'account existed',
        });
      }
      return false;
    })
    .catch((err) => next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.UnknownError,
      message: `database error: ${err}`,
    }));

  return bcrypt.hash(body.password, salt, (err, hash) => {
    if (err) {
      return next({
        code: Error.UnknownError,
        message: 'cannot create password',
        extra: `root cause: ${err}`,
      });
    }
    const user = new User({
      username: body.username,
      password: hash,
      account_type: parseInt(body.role, 10),
    });
    return user.save().then(() => {
      next({
        status: SC.OK,
        code: Error.Success,
        message: 'user created',
      });
    }).catch((error) => next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.UnknownError,
      message: `unexpected error occurred: ${error}`,
    }));
  });
});

module.exports = router;
