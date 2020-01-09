const Router = require("express");
const router = Router();

const CityService = require("../services/city.service");
const ControllerResponse = require('../utils/res/controller.response');

router.get('/',
    async (req, res) => {
        try {
            const result = await CityService.getCityList();
            return await ControllerResponse.getResponse(res, result);
        } catch (e) {
            return await ControllerResponse.internalServerError(res, e);
        }
    }
);

module.exports = router;
