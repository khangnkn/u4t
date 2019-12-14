const general = require('./general.error');
const auth = require('./auth.error');
const conversation = require('./conversation.error');

module.exports = {
  ...general,
  ...auth,
  ...conversation,
};
