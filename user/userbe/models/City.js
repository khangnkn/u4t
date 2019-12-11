const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
  city_name: {
    type: String,
    required: true,
  },
});
const City = mongoose.model('City', CitySchema);

module.exports = City;
