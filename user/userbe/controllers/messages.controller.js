const SC = require('http-status-codes');
const { Message, Conversation } = require('../models');
const Error = require('../utils/error');
const { EnsureMessage } = require('../utils/validation/message');

function parseMessage(params) {
  return new Message({
    content: params.content,
    sender: params.sender,
  });
}

const CreateMessage = async (req, res, next) => {
  const { body } = req;
  const err = EnsureMessage(body);
  if (err.error) {
    return next({
      status: SC.BAD_REQUEST,
      code: Error.UnknownError,
      message: err.error,
    });
  }
  const msg = parseMessage(body);
  try {
    let message = await msg.save();
    console.log(message);
    const conversation = await Conversation.findById(body.conversation);
    conversation.messages.push(message);
    conversation.updated_at = +new Date();
    await conversation.save();
    message = await Message.findById(message._id).populate(['sender']);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'message sent',
      data: message,
    });
  } catch (ex) {
    return ex;
  }
  // return msg.save()
  //   .then((message) => Conversation
  //     .findById(body.conversation,
  //       (error, conversation) => {
  //         if (error) {
  //           return next({
  //             status: SC.INTERNAL_SERVER_ERROR,
  //             code: Error.UnknownError,
  //             message: 'error appending message to conversation',
  //             extra: `${error}`,
  //           });
  //         }
  //         // eslint-disable-next-line no-underscore-dangle
  //         conversation.messages.push(message._id);
  //         conversation.save();
  //         return next({
  //           status: SC.OK,
  //           code: Error.Success,
  //           message: 'message sent',
  //           data: message,
  //         });
  //       })).catch((error) => next({
  //     status: SC.INTERNAL_SERVER_ERROR,
  //     code: Error.UnknownError,
  //     message: 'failed to send message',
  //     extra: `${error}`,
  //   }));
};

module.exports = { CreateMessage };
