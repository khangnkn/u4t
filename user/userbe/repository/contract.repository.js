const { Contract } = require('../models');

const GetAll = async (id) => {
  try {
    const l1 = await Contract.find({ tutor: id }).populate(['tutor', 'learner']).exec();
    const l2 = await Contract.find({ learner: id }).populate(['tutor', 'learner']).exec();
    return [...l1, ...l2];
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

const ChangeStatus = async (id, status) => {
  try {
    await Contract.findByIdAndUpdate(id, { status }, { useFindAndModify: false });
    const res = await Contract.findById(id).populate(['learner', 'tutor']);
    return res;
  } catch (ex) {
    return ex;
  }
};

module.exports = {
  GetAll,
  Create,
  ChangeStatus,
};
