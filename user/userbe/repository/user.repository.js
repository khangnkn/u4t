const { User } = require('../models');
const { GetByTutor } = require('./contract.repository');


const GetById = async (id) => {
  try {
    const user = await User.findById(id).populate(['city', 'data.skills', 'data.level']).exec();
    if (!user) {
      return {
        error: 'user not found',
      };
    }
    const contracts = await GetByTutor(user._id);
    const result = {
      user,
      contracts,
    };
    return result;
  } catch (ex) {
    console.log(`[ERROR] ${ex}`);
    return ex;
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
    const tutor = await User.findOne({ _id: id, role: 1 }).populate(['city', 'skills', 'data.level']).exec();
    if (!tutor) {
      return {
        error: 'tutor not found',
      };
    }

    const contracts = await GetByTutor(tutor._id);
    const result = {
      tutor,
      contracts,
    };
    return result;
  } catch (err) {
    return err;
  }
};

const SearchByQuery = async (query) => {
  try {
    const users = User.find({ ...query, role: 1 }).populate(['city', 'data.level']).exec();
    return users;
  } catch (ex) {
    return ex;
  }
};

module.exports = {
  GetById,
  GetTopTutors,
  GetTutorDetail,
  SearchByQuery,
};
