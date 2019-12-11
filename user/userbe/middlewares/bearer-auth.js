const jwt = require('jsonwebtoken');
const SC = require('http-status-codes');
const Error = require('../utils/error');
const secret = require('../utils/secret');
const User = require('../models/User');

const AuthorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next({
      status: SC.UNAUTHORIZED,
      code: Error.TokenIsRequired,
      message: 'authorization header is required',
    });
  }
  const token = authorization.substr(7);
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return next({
        status: SC.UNAUTHORIZED,
        code: Error.InvalidToken,
        message: 'invalid token',
      });
    }
    return User.findOne({ username: decoded.user.username }, (error, user) => {
      if (error) {
        return next({
          status: SC.UNAUTHORIZED,
          code: Error.UnknownError,
          message: 'authorization failed',
          extra: `${error}`,
        });
      }
      res.locals.isAuth = true;
      res.locals.user = user;
      return next();
    });
  });
};

module.exports = AuthorizationMiddleware;
