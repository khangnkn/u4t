const { Contract } = require('../models');

const GetByTutor = async (id) => {
  try {
    const contracts = await Contract.find({ tutor: id }).populate('tutor').exec();
    return contracts;
  } catch (err) {
    return err;
  }
};

module.exports = { GetByTutor };
