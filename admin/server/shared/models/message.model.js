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
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Message = mongoose.model('Message', MessageSchema);


module.exports = Message;
