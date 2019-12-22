const SC = require('http-status-codes');
const { GetTopTutors, GetTutorDetail } = require('../repository/user.repository');
const Error = require('../utils/error');

const TopTutor = async (req, res, next) => {
  try {
    const users = await GetTopTutors();
    next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: users,
    });
  } catch (error) {
    next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.ErrorInDatabase,
      message: 'error when call repository',
      extra: error,
    });
  }
};

const DetailTutor = async (req, res, next) => {
  try {
    const result = await GetTutorDetail(req.params.id);

    if (result.error) {
      return next({
        status: SC.NOT_FOUND,
        code: Error.ErrorNotFound,
        message: result.error,
      });
    }
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: result,
    });
  } catch (err) {
    return next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.ErrorInDatabase,
      message: 'error when call repository',
      extra: err,
    });
  }
};

module.exports = { TopTutor, DetailTutor };
