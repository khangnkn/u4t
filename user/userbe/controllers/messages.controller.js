const SC = require('http-status-codes');
const { Message } = require('../models');
const Error = require('../utils/error');
const { EnsureMessage } = require('../utils/validation/message');

function parseMessage(params) {
  return new Message({
    content: params.content,
    by: params.sender,
  });
}

const CreateMessage = (req, res, next) => {
  const { body } = req;
  const err = EnsureMessage(body);
  if (err) {
    return next({
      status: SC.BAD_REQUEST,
      code: Error.UnknownError,
      message: err,
    });
  }
  const msg = parseMessage(body);
  return msg.save().then((message) => next({
    status: SC.OK,
    code: Error.Success,
    message: 'message sent',
    data: message,
  })).catch((error) => next({
    status: SC.INTERNAL_SERVER_ERROR,
    code: Error.UnknownError,
    message: 'failed to send message',
    extra: `${error}`,
  }));
};

module.exports = { CreateMessage };
