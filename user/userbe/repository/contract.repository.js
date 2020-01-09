const { Contract } = require('../models');

const GetByTutor = async (id) => {
  try {
    const contracts = await Contract.find({ tutor: id }).populate('tutor').exec();
    return contracts;
  } catch (err) {
    return err;
  }
};

const Create = async (data) => {
  const contract = new Contract();
  contract.tutor = data.tutor;
  contract.learner = data.learner;
  contract.title = data.title;
  contract.description = data.description;
  contract.price = data.price;
  contract.total = data.total;
  contract.start_date = data.start_date;
  contract.end_date = data.end_date;
  contract.hpw = data.hpw;
  try {
    const res = await contract.save();
    console.log('contract', contract);
    return res;
  } catch (ex) {
    return ex;
  }
};

module.exports = {
  GetByTutor,
  Create,
};
