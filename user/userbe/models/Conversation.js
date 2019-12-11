const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema User
const ConversationSchema = new Schema({
  created_at: {
    type: Date,
  },
  teacher: {
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

const Conversation = mongoose.model('Conversations', ConversationSchema);

module.exports = Conversation;
