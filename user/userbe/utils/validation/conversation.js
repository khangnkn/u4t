const Error = require('../error');

const EnsureGetConversation = (params) => {
  if (!params.id) {
    return {
      valid: false,
      error: {
        code: Error.ConversationIDIsRequired,
        message: 'conversation is required',
      },
    };
  }
  return {
    valid: true,
    error: null,
  };
};

const EnsureCreateConversation = (body) => {
  if (!body.teacher) {
    return {
      valid: false,
      error: {
        code: Error.ConversationTeacherIsRequired,
        message: 'teacher is required',
      },
    };
  }
  if (!body.learner) {
    return {
      valid: false,
      error: {
        code: Error.ConversationLearnerIsRequired,
        message: 'learner is required',
      },
    };
  }
  return {
    valid: true,
    error: null,
  };
};

module.exports = {
  EnsureGetConversation,
  EnsureCreateConversation,
};
