const Error = require('../error');

const validate = (body) => {
  if (!body.username) {
    return {
      valid: false,
      error: Error.UsernameIsRequired,
      message: 'username is required',
    };
  }
  if (!body.password) {
    return {
      valid: false,
      error: Error.PasswordIsRequired,
      message: 'password is required',
    };
  }
  if (body.role === undefined) {
    return {
      valid: false,
      error: Error.RoleIsRequired,
      message: 'user\'s role is required',
    };
  }
  return {
    valid: true,
  };
};

module.exports = validate;
