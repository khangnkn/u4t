const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema User
const ReviewSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  rating: {
    type: Number,
  },
  content: {
    type: String,
    required: true,
    default: '',
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Review = mongoose.model('Review', ReviewSchema);


module.exports = Review;
