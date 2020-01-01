//routes/auth.js
const Router = require("express");
const router = Router();
const UserService = require("../services/user.service");
const ControllerResponse = require('../utils/res/controller.response');

router.post('/', async (req, res) => {
    try {
        let result = await UserService.addNew(req.body);
        return await ControllerResponse.postResponse(res, result)
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e)
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
        return await ControllerResponse.getResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

router.get('/detail/:userName', async (req, res) => {
    try {
        const _payload = {
            username: req.params.userName
        };
        const result = await UserService.getUserDetail(_payload);
        return await ControllerResponse.getResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e)
    }
});

router.put('/lock/:username', async (req, res) => {
    try {
        const _payload = {
            isActive: false,
            username: req.params.username
        };
        const result = await UserService.updateActiceUser(_payload);
        return await ControllerResponse.updateResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e)
    }
});

router.put('/unlock/:username', async (req, res) => {
    try {
        const _payload = {
            isActive: true,
            username: req.params.username
        };

        const result = await UserService.updateActiceUser(_payload);
        return await ControllerResponse.updateResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

router.post('/', async (req, res) => {
    try {
        let result = await UserService.addNew(req.body);
        return await ControllerResponse.postResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

router.put('/update', async (req, res) => {
    try {
        let result = await SkillService.updateSkill(req.body);
        return await ControllerResponse.updateResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e)
    }
});

router.put('/delete', async (req, res) => {
    try {
        let result = await SkillService.deleteSkill(req.body);
        return await ControllerResponse.deleteResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

module.exports = router;
