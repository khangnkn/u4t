const { Level } = require('../models');

const GetAll = async () => {
  try {
    const levels = await Level.find();
    return levels;
  } catch (err) {
    return err;
  }
};

module.exports = { GetAll };
