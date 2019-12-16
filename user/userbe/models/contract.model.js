const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContractSchema = new Schema({
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  learner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  issuing_time: {
    type: Date,
    default: new Date(),
  },
  end_date: {
    type: Date,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

const Contract = mongoose.model('Contracts', ContractSchema);

module.exports = Contract;
