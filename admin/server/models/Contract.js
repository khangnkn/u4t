const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({}
);

const Contract = mongoose.model('Contract', ContractSchema);

module.exports = Contract;
