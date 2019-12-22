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
<<<<<<< HEAD
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
  },
=======
>>>>>>> update user detail
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
<<<<<<< HEAD
  hpw: {
    type: Number,
    default: 0,
  },
=======
>>>>>>> update user detail
  total: {
    type: Number,
    default: 0,
  },
  issuing_time: {
<<<<<<< HEAD
    type: Number,
    default: +new Date(),
  },
  start_date: {
    type: Number,
  },
  end_date: {
    type: Number,
=======
    type: Date,
    default: new Date(),
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
>>>>>>> update user detail
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
