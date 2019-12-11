const User = require('../models/User');

const GetByID = (id) => {
  User.findById(id, (err, user) => {
    if (err) {
      console.log('ERROR: ', err);
    }
    return user;
  });
};

const GetByUsername = (username) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log('ERROR', err);
      return;
    }
    return user;
  });
};

module.exports = {
  GetByID,
  GetByUsername,
};
