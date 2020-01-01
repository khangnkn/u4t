const Router = require("express");
const router = Router();

const SkillService = require("../services/skill.service");
const ControllerResponse = require('../utils/res/controller.response');

router.post('/', async (req, res) => {
    try {
        let result = await SkillService.addNewSkill(req.body);
        return await ControllerResponse.postResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

router.put('/delete', async (req, res) => {
    try {
        let result = await SkillService.deleteSkill(req.body);
        return await ControllerResponse.deleteResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(e)
    }
});

router.put('/update', async (req, res) => {
    try {
        let result = await SkillService.updateSkill(req.body);
        return await ControllerResponse.updateResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

router.get('/:page/:limit', async (req, res) => {
    try {
        const _payload = {
            page: req.params.page,
            limit: req.params.limit
        };
        const result = await SkillService.getSkillList(_payload);
        return await ControllerResponse.getResponse(res, result);
    } catch (e) {
        return await ControllerResponse.internalServerError(res, e);
    }
});

module.exports = router;
