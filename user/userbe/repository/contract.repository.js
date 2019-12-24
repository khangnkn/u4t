const { Contract } = require('../models');

const GetByTutor = async (id) => {
  try {
    const contracts = Contract.find({ tutor: id }).populate('user').exec();
  } catch (err) {
    return err;
  }
};

module.exports = { GetAll };
