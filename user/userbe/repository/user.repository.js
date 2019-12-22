const { User, Contract } = require('../models');


const GetById = async (id) => {
  try {
    const res = await User.findById(id).populate('city').exec();
    return res;
  } catch (error) {
    console.log(`[ERROR] ${error}`);
    return error;
  }
};

const GetTopTutors = async () => {
  try {
    const users = User.find({ role: 1 }).limit(4).populate(['city', 'data.skills']).exec();
    return users;
  } catch (error) {
    return error;
  }
};

const GetTutorDetail = async (id) => {
  try {
    const tutor = User.findOne({ _id: id, role: 1 }).populate(['city', 'data.skills']).exec();
    if (!tutor) {
      return {
        error: 'tutor not found',
      };
    }
    return tutor;
  } catch (err) {
    return err;
  }
};

module.exports = {
  GetById,
  GetTopTutors,
  GetTutorDetail,
};
