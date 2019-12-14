const SC = require('http-status-codes');
const { City } = require('../models');
const Error = require('../utils/error');

const getAll = (req, res, next) => City.find((err, cities) => {
  if (err) {
    return next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.UnknownError,
      message: 'error finding all cities',
      extra: `${err}`,
    });
  }
  return next({
    status: SC.OK,
    code: Error.Success,
    message: 'success',
    data: cities,
  });
});

module.exports = { getAll };
