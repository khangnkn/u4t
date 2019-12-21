const SC = require('http-status-codes');
const Error = require('../utils/error');
const SkillRepository = require('../repository/skill.repository');

const GetAll = async (req, res, next) => {
  try {
    const skills = await SkillRepository.GetAll();
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: skills,
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
