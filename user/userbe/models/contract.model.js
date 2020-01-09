const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContractSchema = new Schema({
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  learner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
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
  hpw: {
    type: Number,
    default: 0,
  },
  status: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  issuing_time: {
    type: Number,
    default: +new Date(),
  },
  start_date: {
    type: Number,
  },
  end_date: {
    type: Number,
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

const Contract = mongoose.model('Contract', ContractSchema);

module.exports = Contract;
