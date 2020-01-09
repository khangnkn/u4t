const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');


const RevenueSchema = new Schema({}
);

RevenueSchema.plugin(mongoosePaginate);

const RevenueModel = mongoose.model('Revenue', RevenueSchema);

module.exports = RevenueModel;
