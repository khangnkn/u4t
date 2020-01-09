const express = require('express');
const router = express.Router();
const RevenueService = require('../services/revenue.service');
const ControllerResponse = require('../utils/res/controller.response');
const RevenueValidator = require('../utils/validator/revenue.validator');

router.get('/top-users/:range',
    RevenueValidator.rangeValidationRules(),
    RevenueValidator.validate,
    async (req, res) => {
        try {
            const payload = {
                range: req.params.range
            };
            const result = await RevenueService.getTopRevenueUser(payload);
            return await ControllerResponse.getResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);

router.get('/top-skills/:range',
    RevenueValidator.rangeValidationRules(),
    RevenueValidator.validate,
    async (req, res) => {
        try {
            const payload = {
                range: req.params.range
            };
            const result = await RevenueService.getTopRevenueSkill(payload);
            return await ControllerResponse.getResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);

router.get('/total/:range',
    RevenueValidator.rangeValidationRules(),
    RevenueValidator.validate,
    async (req, res) => {
        try {
            const payload = {
                range: req.params.range
            };
            const result = await RevenueService.getTotalRevenue(payload);
            return await ControllerResponse.getResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);
module.exports = router;
