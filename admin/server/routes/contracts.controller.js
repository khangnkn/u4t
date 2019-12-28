//routes/auth.js
import { Router } from "express";
const router = Router();

import ContractService from "../services/contract.service";
import ControllerResponse from '../utils/res/controller.response';

router.post('/', async (req, res) => {
    try {
        const res = ContractService.addNewContract(req.body);
        return ControllerResponse.postResponse(res);
    } catch (error) {
        console.trace(error)
        return ControllerResponse.internalServerError(error);
    }
});

router.put('/update', (req, res) => {
    try {
        const res = ContractService.updateContract(req.body);
        return ControllerResponse.updateResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
})

router.put('/delete', (req, res) => {
    try {
        const res = ContractService.deleteContract(req.body);
        return ControllerResponse.deleteResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
})

router.get('/details/:id', (req, res) => {
    try {
        const res = ContractService.getContractById(req.params.id);
        return ControllerResponse.getResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
});

router.get('/:page/:contractsPerPage', (req, res) => {
    try {
        const res = ContractService.getContractPaginate(req.body);
        return ControllerResponse.getResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
});

export default router;
