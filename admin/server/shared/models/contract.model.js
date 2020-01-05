const mongoose = require('mongoose');

const {Schema} = mongoose;

const ContractSchema = new Schema(
    {
        tutor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        learner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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
        start_date: {
            type: Date,
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
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

const Contract = mongoose.model('Contract', ContractSchema);

module.exports = Contract;
