const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
  city_name: {
    type: String,
    required: true,
  },
});
const City = mongoose.model('Cities', CitySchema);

module.exports = City;
