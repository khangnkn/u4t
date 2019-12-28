//routes/auth.js
import { Router } from "express";
const router = Router();
import UserService from "../services/user.service";
import ControllerResponse from '../utils/res/controller.response';

router.post('/', async (req, res) => {
    try {
        let result = await UserService.addNew(req.body);
        return ControllerResponse.postResponse(result)
    } catch (e) {
        return ControllerResponse.internalServerError(e)
    }
});

router.get('/:role/:page/:limit', async (req, res) => {
    try {
        const _payload = {
            role: req.params.role,
            page: req.params.page,
            limit: req.params.limit
        };
        const result = await UserService.getUserList(_payload);
        return ControllerResponse.getResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(result);
    }
});

router.get('/detail/:userName', async (req, res) => {
    try {
        const _payload = {
            username: req.params.userName
        };
        const result = await UserService.getUserDetail(_payload);
        return ControllerResponse.getResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e)
    }
});

router.put('/lock/:username', async (req, res) => {
    try {
        const _payload = {
            isActive: false,
            username: req.params.username
        };
        const result = await UserService.updateActiceUser(_payload);
        return ControllerResponse.updateResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e)
    }
});

router.put('/unlock/:username', async (req, res) => {
    try {
        const _payload = {
            isActive: true,
            username: req.params.username
        };

        const result = await UserService.updateActiceUser(_payload);
        return ControllerResponse.updateResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e);
    }
});

router.post('/', async (req, res) => {
    try {
        let result = await UserService.addNew(req.body);
        return ControllerResponse.postResponse(result);
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

router.put('/update', async (req, res) => {
    try {
        let result = await SkillService.updateSkill(req.body);
        return ControllerResponse.updateResponse(result);
    } catch (e) {
       return ControllerResponse.internalServerError(e)
    }
});

router.put('/delete', async (req, res) => {
    try {
        let result = await SkillService.deleteSkill(req.body);
        return ControllerResponse.deleteResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e);
    }
});

export default router;
