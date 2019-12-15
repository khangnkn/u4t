const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplainSchema = new Schema({

    }
);

const Complain = mongoose.model('Complain', ComplainSchema);

module.exports = Complain;
