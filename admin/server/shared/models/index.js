const User = require('./user.model');
const City = require('./city.model');
const Message = require('./message.model');
const Conversation = require('./conversation.model');
const Contract = require('./contract.model');
const Skill = require('./skill.model');
const Level = require('./level.model');

const models = {
  User,
  City,
  Message,
  Conversation,
  Contract,
  Skill,
  Level,
};

module.exports = models;
