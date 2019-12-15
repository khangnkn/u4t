const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({

    }
);

const ContractModel = mongoose.model('Contract', ContractSchema);

module.exports = ContractModel;
