const CityRepository = require("../repository/city.repository");
const ServiceResponse = require("../utils/res/service.response");

const getCityList = async () => {
    let result = await CityRepository.getAllCities();
    return ServiceResponse.serviceResponseRead(result);
};

module.exports = {
    getCityList
};
