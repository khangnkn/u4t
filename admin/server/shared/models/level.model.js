const mongoose = require('mongoose');

const { Schema } = mongoose;

const LevelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Level = mongoose.model('Level', LevelSchema);

module.exports = Level;
