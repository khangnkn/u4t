const passport = require('passport');
const SC = require('http-status-codes');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../utils/secret');
const { salt } = require('../utils/config');
const validation = require('../utils/validation/register');
const Error = require('../utils/error');
const { User } = require('../models');


const LoginHandler = (req, res, next) => {
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
};

const RegisterHandler = (req, res, next) => {
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
};

module.exports = {
  LoginHandler,
  RegisterHandler,
};
