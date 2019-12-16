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
    ref: 'Users',
  },
  learner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Messages',
  }],
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
