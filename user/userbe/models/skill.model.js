const mongoose = require('mongoose');

const { Schema } = mongoose;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;
