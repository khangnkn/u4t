const SC = require('http-status-codes');
const Error = require('../utils/error');
const { Create } = require('../repository/contract.repository');

const CreateContract = async (req, res, next) => {
  const data = req.body;
  try {
    const ret = await Create(data);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: ret,
    });
  } catch (ex) {
    return next({
      status: SC.INTERNAL_SERVER_ERROR,
      code: Error.ErrorInDatabase,
      message: 'cannot create conversation',
      extra: `${ex}`,
    });
  }
};

module.exports = {
  CreateContract,
};
