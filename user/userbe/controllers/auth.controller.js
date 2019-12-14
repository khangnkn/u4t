const passport = require('passport');
const SC = require('http-status-codes');
const jwt = require('jsonwebtoken');
const secret = require('../utils/secret');


const login = (req, res, next) => {
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

module.exports = {
  login,
};
