const {body, validationResult} = require('express-validator');
const ControllerResponse = require('../res/controller.response');

const addAdminValidationRules = () => {
    return [
        body('username')
            .exists().withMessage('Username is require'),
        body('email')
            .isEmail().withMessage('Invalid email')
            .exists().withMessage('Email is require'),
        body('password')
            .isLength({min: 5}).withMessage('Length must > 5')
            .exists().withMessage('Password is require'),
        body('passwordConfirmation')
            .custom((value, {req}) => value === req.body.password).withMessage("Password confirmation doesn't match")
            .isLength({min: 5}).withMessage('Length must > 5')
            .exists().withMessage('Password confirmation is require'),
        body('role')
            .isIn(['2', '3']).withMessage('Invalid role')
            .exists().withMessage('Password confirmation is require'),
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
    addAdminValidationRules,
    validate,
};
