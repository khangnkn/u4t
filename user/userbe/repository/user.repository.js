const { User, Contract } = require('../models');


const GetById = async (id) => {
  try {
    const res = await User.findById(id);
    return {
      error: null,
      user: res,
    };
  } catch (error) {
    return {
      error,
      user: null,
    };
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
    const res = await Contract.aggregate(aggregatorOpts).exec();
    // const res = User.paginate({ role: 1 }, { page, limit });
    return {
      error: null,
      result: res,
    };
  } catch (error) {
    return {
      error: true,
      result: error,
    };
  }
};

module.exports = {
  GetById,
  GetTopTutors,
};
