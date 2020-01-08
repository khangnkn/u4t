const { Conversation } = require('../models');

const GetAll = async (id) => {
  try {
    const l1 = await Conversation.find({ learner: id }).populate(['tutor', 'learner', 'messages']);
    const l2 = await Conversation.find({ tutor: id }).populate(['tutor', 'learner', 'messages']);

    const res = [...l1, ...l2];
    res.sort((a, b) => b.updated_at - a.updated_at);
    return res;
  } catch (ex) {
    return ex;
  }
};

module.exports = { GetAll };
