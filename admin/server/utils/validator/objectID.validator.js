const {param, validationResult} = require('express-validator');
const ControllerResponse = require('../res/controller.response');
const mongoose = require('mongoose');

const objectIDValidationRules = () => {
    return [
        param('id')
            .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('Invalid Object ID')
            .exists().withMessage('Username is require'),
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
        message: 'Errors',
        data: extractedErrors
    };
    return await ControllerResponse.validatorResponse(res, result)
};

module.exports = {
    objectIDValidationRules,
    validate,
};
