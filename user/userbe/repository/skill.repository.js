const { Skill } = require('../models');

const GetAll = async () => {
  try {
    const skills = await Skill.find();
    return skills;
  } catch (err) {
    return err;
  }
};

module.exports = { GetAll };
