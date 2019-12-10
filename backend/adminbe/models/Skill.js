const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        }
    },
    {
        timestamp: true
    }
);

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;