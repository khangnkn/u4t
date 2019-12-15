const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplainSchema = new Schema({

    }
);

const ComplainModel = mongoose.model('Complain', ComplainSchema);

module.exports = ComplainModel;
