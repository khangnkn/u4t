const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema User
const ConversationSchema = new Schema({
  created_at: {
    type: Date,
    default: new Date(),
  },
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  learner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
