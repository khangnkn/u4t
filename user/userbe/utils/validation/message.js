const EnsureMessage = (message) => {
  if (!message.by) {
    return {
      error: 'sender must not be empty',
    };
  }
  return {
    error: null,
  };
};

module.exports = { EnsureMessage };
