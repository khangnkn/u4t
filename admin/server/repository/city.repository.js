const CityModel = require('../shared/models/city.model');

const getAllCities = async () => {
    const res = await CityModel
        .find()
        .sort({
            name: 1
        });
    return {
        err: false,
        res: res
    }
};


module.exports = {
    getAllCities
};
