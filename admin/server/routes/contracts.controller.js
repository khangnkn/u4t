const Router = require("express");
const router = Router();

const ContractService = require("../services/contract.service");
const ControllerResponse = require('../utils/res/controller.response');

router.post('/', async (req, res) => {
    try {
        const result = await ContractService.addNewContract(req.body);
        return await ControllerResponse.postResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

router.put('/update', async (req, res) => {
    try {
        const result = await ContractService.updateContract(req.body);
        return await ControllerResponse.updateResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

router.put('/delete', async (req, res) => {
    try {
        const result = await ContractService.deleteContract(req.body);
        return await ControllerResponse.deleteResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const result = await ContractService.getContractById(req.params.id);
        return await ControllerResponse.getResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

router.get('/:page/:contractsPerPage', async (req, res) => {
    try {
        const result = await ContractService.getContractPaginate(req.body);
        return await ControllerResponse.getResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

module.exports = router;
