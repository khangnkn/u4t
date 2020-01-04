const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const CityModel = mongoose.model('City', CitySchema);

module.exports = CityModel;
