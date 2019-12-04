const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema User
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: false,
  },
  account_type: {
    type: Number,
    required: false,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

UserSchema.set('toJSON', {
  transform(doc, ret) {
    const r = ret;
    delete r.password;
    return r;
  },
});

const User = mongoose.model('Users', UserSchema);

User.filter = (user) => ({
  username: user.username,
  fullname: user.fullname,
  account_level: user.account_level,
});

module.exports = User;
