const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const ContractSchema = new Schema({
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
});

ContractSchema.plugin(mongoosePaginate);
const ContractModel = mongoose.model('Contract', ContractSchema);

module.exports = ContractModel;
