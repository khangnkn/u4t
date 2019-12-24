const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

SkillSchema.plugin(mongoosePaginate);

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;
