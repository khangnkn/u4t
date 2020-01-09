const {isEmail, isLength} = require("validator");
const {isBoolean, isInteger, inRange} = require('lodash');
const {body, param, validationResult} = require('express-validator');
const ControllerResponse = require('../res/controller.response');
const mongoose = require('mongoose');

const addContractValidationRules = () => {
    return [
        body('tutor')
            .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('Invalid Object ID')
            .exists().withMessage('Tutor is require'),
        body('learner')
            .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('Invalid Object ID')
            .exists().withMessage('Learner is require'),
        body('price')
            .if(body('price').exists())
            .isNumeric().withMessage('Invalid price'),
        body('total')
            .if(body('total').exists())
            .isNumeric().withMessage('Invalid total')
    ]
};

const updateContractValidationRules = () => {
    return [
        param('id')
            .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('Invalid Object ID')
            .exists().withMessage('Id is require'),
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
    addContractValidationRules,
    updateContractValidationRules,
    validate,
};
