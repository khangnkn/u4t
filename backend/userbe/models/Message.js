const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema User
const MessageSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
    default: '',
  },
  seen: {
    type: Boolean,
    required: true,
    default: false,
  },
  by: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
});

const Message = mongoose.model('Messages', MessageSchema);


module.exports = Message;
