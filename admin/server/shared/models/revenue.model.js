const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevenueSchema = new Schema({}
);

const RevenueModel = mongoose.model('Revenue', RevenueSchema);

module.exports = RevenueModel;
