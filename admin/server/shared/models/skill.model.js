const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const {Schema} = mongoose;

const SkillSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        deleted_at: {
            type: Date,
            default: null,
        },
    }, {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

SkillSchema.plugin(mongoosePaginate);

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;
