const SC = require('http-status-codes');
const Error = require('../utils/error');

const CreateNotFound = (req, res, next) => next({
  status: SC.NOT_FOUND,
  code: Error.ErrorNotFound,
  message: 'endpoint not found',
});

module.exports = { CreateNotFound };
