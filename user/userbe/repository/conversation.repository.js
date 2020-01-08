const { Conversation } = require('../models');

const GetAll = async (id) => {
  try {
    const l1 = await Conversation.find({ learner: id }).populate(['tutor', 'learner', 'messages']);
    const l2 = await Conversation.find({ tutor: id }).populate(['tutor', 'learner', 'messages']);

    return [...l1, ...l2];
  } catch (ex) {
    return ex;
  }
};

module.exports = { GetAll };
