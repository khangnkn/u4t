const SC = require('http-status-codes');
const Error = require('../utils/error');
const { Conversation } = require('../models');
const { EnsureGetConversation, EnsureCreateConversation } = require('../utils/validation/conversation');

const GetConversation = (req, res, next) => {
  const { params } = req;
  const validation = EnsureGetConversation(params);
  if (!validation.valid) {
    return next({
      status: SC.BAD_REQUEST,
      code: validation.error.code,
      message: validation.error.message,
    });
  }
  return Conversation
    .findById(params.id)
    .populate('messages')
    .exec((error, conversation) => {
      if (error) {
        return next({
          status: SC.INTERNAL_SERVER_ERROR,
          code: Error.UnknownError,
          message: 'cannot get conversation',
          extra: error,
        });
      }
      return next({
        status: SC.OK,
        code: Error.Success,
        message: 'success',
        data: conversation,
      });
    });
};

const CreateConversation = (req, res, next) => {
  const { body } = req;
  const validation = EnsureCreateConversation(body);
  if (!validation.valid) {
    return next({
      status: SC.BAD_REQUEST,
      code: validation.error.code,
      message: validation.error.message,
    });
  }
  const Conv = new Conversation({
    totur: body.tutor,
    learner: body.learner,
  });
  return Conv.save((error, conversation) => {
    if (error) {
      return next({
        status: SC.INTERNAL_SERVER_ERROR,
        code: Error.ErrorInDatabase,
        message: 'cannot create conversation',
        extra: `${error}`,
      });
    }
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: conversation,
    });
  });
};

module.exports = { GetConversation, CreateConversation };
