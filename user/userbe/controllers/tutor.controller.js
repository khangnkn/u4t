const SC = require('http-status-codes');
const { GetTopTutors } = require('../repository/user.repository');
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

module.exports = { TopTutor };
