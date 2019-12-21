const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const SkillSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
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

SkillSchema.plugin(mongoosePaginate);

const SkillModel = mongoose.model('Skill', SkillSchema);

module.exports = SkillModel;
