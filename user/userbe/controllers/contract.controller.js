const SC = require('http-status-codes');
const Error = require('../utils/error');
const { Create, GetAll, ChangeStatus } = require('../repository/contract.repository');

const CreateContract = async (req, res, next) => {
  const data = req.body;
  console.log(data);
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

const GetAllContracts = async (req, res, next) => {
  const id = res.locals.user._id;
  try {
    const contracts = await GetAll(id);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: contracts,
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

const ChangeStatusHandler = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    const contract = await ChangeStatus(id, status);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: contract,
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
  GetAllContracts,
  ChangeStatusHandler,
};
