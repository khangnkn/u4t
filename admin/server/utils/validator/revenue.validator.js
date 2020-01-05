const {param, validationResult} = require('express-validator');
const ControllerResponse = require('../res/controller.response');

const rangeValidationRules = () => {
    return [
        param('range')
            .isIn(['today', 'week', 'month', 'year']).withMessage('Invalid range')
            .exists().withMessage('Range is require'),
    ]
};

const validate = async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = {};
    errors.array().map(err => extractedErrors[err.param] = err.msg);
    const result = {
        code: 'EV',
        message: 'Errors in body',
        data: extractedErrors
    };
    return await ControllerResponse.validatorResponse(res, result)
};

module.exports = {
    rangeValidationRules,
    validate,
};
