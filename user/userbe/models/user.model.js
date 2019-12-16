const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
  email: {
    type: String,
    required: false,
  },
  fullname: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  role: {
    type: Number,
    required: false,
    default: 0,
  },
  data: {
    level: {
      type: String,
      required: false,
    },
    skills: {
      type: Schema.Types.ObjectId,
      ref: 'Skills',
      required: false,
    },
    intro: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
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

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);

User.filter = (user) => ({
  username: user.username,
  fullname: user.fullname,
  account_level: user.account_level,
});

module.exports = User;
