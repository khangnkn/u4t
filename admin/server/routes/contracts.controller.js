const Router = require("express");
const router = Router();

const ContractService = require("../services/contract.service");
const ControllerResponse = require('../utils/res/controller.response');
const ContractValidator = require("../utils/validator/contract.validator");
const ObjectIdValidator = require("../utils/validator/objectID.validator");

router.post('/',
    ContractValidator.addContractValidationRules(),
    ContractValidator.validate,
    async (req, res) => {
        try {
            const result = await ContractService.addNewContract(req.body);
            return await ControllerResponse.postResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);

router.get('/details/:id',
    ObjectIdValidator.objectIDValidationRules(),
    ContractValidator.validate,
    async (req, res) => {
        try {
            const result = await ContractService.getContractById(req.params.id);
            return await ControllerResponse.getResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);

router.get('/:page/:limit',
    async (req, res) => {
        try {
            const payload = {
                page: req.params.page,
                limit: req.params.limit
            };
            const result = await ContractService.getContractPaginate(payload);
            return await ControllerResponse.getResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);

router.put('/update/:id',
    ContractValidator.updateContractValidationRules(),
    ContractValidator.validate,
    async (req, res) => {
        try {
            const payload = {
                id: req.params.id,
                update: req.body
            };
            const result = await ContractService.updateContract(payload);
            return await ControllerResponse.updateResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);

router.put('/delete/:id',
    ObjectIdValidator.objectIDValidationRules(),
    ContractValidator.validate,
    async (req, res) => {
        try {
            const result = await ContractService.deleteContract(req.params.id);
            return await ControllerResponse.deleteResponse(res, result);
        } catch (error) {
            console.trace(error);
            return await ControllerResponse.internalServerError(res, error);
        }
    }
);


module.exports = router;
