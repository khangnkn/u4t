const EnsureMessage = (message) => {
  if (!message.conversation) {
    return {
      error: 'conversation must not be empty',
    };
  }
  if (!message.sender) {
    return {
      error: 'sender must not be empty',
    };
  }
  return {
    error: null,
  };
};

module.exports = { EnsureMessage };
