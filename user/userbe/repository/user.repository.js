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
    const aggregatorOpts = [
      {
        $unwind: '$tutor',
      },
      {
        $group: {
          _id: '$items',
          count: { $sum: 1 },
        },
      },
    ];
    const users = User.find({ role: 1 }).limit(4).populate('city').exec();
    return users;
  } catch (error) {
    return error;
  }
};

module.exports = {
  GetById,
  GetTopTutors,
};
