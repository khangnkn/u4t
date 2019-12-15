const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevenueSchema = new Schema({}
);

const Revenue = mongoose.model('Revenue', RevenueSchema);

module.exports = Revenue;
