const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const {Schema} = mongoose;

const ContractSchema = new Schema(
    {
        tutor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        learner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        skill: {
            type: Schema.Types.ObjectId,
            ref: 'Skill',
            require: true
        },
        title: {
            type: String,
            default: 'Contract title'
        },
        description: {
            type: String,
            default: 'Contract description'
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
        start_date: {
            type: Date,
            default: null
        },
        end_date: {
            type: Date,
            default: null
        },
        rating: {
            type: Number,
            default: 0,
        },
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review',
        }],
        deleted_at: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

ContractSchema.plugin(mongoosePaginate);

const ContractModel = mongoose.model('Contract', ContractSchema);

module.exports = ContractModel;
