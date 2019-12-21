const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const ContractSchema = new Schema({

    }
);

ContractSchema.plugin(mongoosePaginate);
const ContractModel = mongoose.model('Contract', ContractSchema);

module.exports = ContractModel;
