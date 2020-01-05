//routes/auth.js
const Router = require("express");
const router = Router();
const UserService = require("../services/user.service");
const ControllerResponse = require('../utils/res/controller.response');
const UserValidator = require("../utils/validator/user.validator");
const ObjectIdValidator = require("../utils/validator/objectID.validator")

router.post('/',
    UserValidator.addUserValidationRules(),
    UserValidator.validate,
    async (req, res) => {
        try {
            let result = await UserService.addNewUser(req.body);
            return await ControllerResponse.postResponse(res, result)
        } catch (e) {
            return await ControllerResponse.internalServerError(res, e)
        }
    }
);

router.get('/:role/:page/:limit', async (req, res) => {
    try {
        const _payload = {
            role: req.params.role,
            page: req.params.page,
            limit: req.params.limit
        };
        const result = await UserService.getUserList(_payload);
        return await ControllerResponse.getResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

router.get('/detail/:id',
    ObjectIdValidator.objectIDValidationRules(),
    ObjectIdValidator.validate,
    async (req, res) => {
        try {
            const _payload = {
                id: req.params.id
            };
            const result = await UserService.getUserDetail(_payload);
            return await ControllerResponse.getResponse(res, result);
        } catch (e) {
            return await ControllerResponse.internalServerError(res, e)
        }
    }
);

router.put('/lock/:id',
    ObjectIdValidator.objectIDValidationRules(),
    ObjectIdValidator.validate,
    async (req, res) => {
        try {
            const _payload = {
                update: {
                    is_active: false,
                },
                id: req.params.id
            };
            const result = await UserService.updateActiveUser(_payload);
            return await ControllerResponse.updateResponse(res, result);
        } catch (e) {
            return await ControllerResponse.internalServerError(res, e)
        }
    }
);

router.put('/unlock/:id',
    ObjectIdValidator.objectIDValidationRules(),
    ObjectIdValidator.validate,
    async (req, res) => {
        try {
            const _payload = {
                update: {
                    is_active: true,
                },
                id: req.params.id
            };

            const result = await UserService.updateActiveUser(_payload);
            return await ControllerResponse.updateResponse(res, result);
        } catch (e) {
            return await ControllerResponse.internalServerError(res, e);
        }
    }
);

module.exports = router;
