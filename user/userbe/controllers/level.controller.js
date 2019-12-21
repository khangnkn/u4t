const SC = require('http-status-codes');
const Error = require('../utils/error');
const LevelRepository = require('../repository/level.repository');

const GetAll = async (req, res, next) => {
  try {
    const levels = await LevelRepository.GetAll();
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: levels,
    });
  } catch (err) {
    return next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.UnknownError,
      message: 'unexpected error occured',
      extra: err,
    });
  }
};

module.exports = { GetAll };
