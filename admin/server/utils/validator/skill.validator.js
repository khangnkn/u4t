const {body, param, validationResult} = require('express-validator');
const ControllerResponse = require('../res/controller.response');
const mongoose = require('mongoose');

const addSkillValidationRules = () => {
    return [
        body('name')
            .isLength({min: 1}).withMessage("Invalid skill name.")
            .exists().withMessage('Skill name is require'),
    ]
};

const updateSkillValidationRules = () => {
    return [
        param('id')
            .custom((value) => mongoose.Types.ObjectId.isValid(value)).withMessage('Invalid Object ID')
            .exists().withMessage('Id is require'),
        body('name')
            .isLength({min: 1}).withMessage("Invalid skill name.")
            .exists().withMessage('Skill name is require'),
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
    addSkillValidationRules,
    updateSkillValidationRules,
    validate,
};
