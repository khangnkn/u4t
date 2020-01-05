const mongoose = require('mongoose');

const {Schema} = mongoose;

const CitySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    }, {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);
const CityModel = mongoose.model('City', CitySchema);

module.exports = CityModel;
