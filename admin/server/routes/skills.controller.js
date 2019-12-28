import { Router } from "express";
const router = Router();

import SkillService from "../services/skill.service";
import ControllerResponse from '../utils/res/controller.response';

router.post('/', async (req, res) => {
    try {
        let result = await SkillService.addNewSkill(req.body);
        return ControllerResponse.postResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e);
    }
});

router.put('/delete', async (req, res) => {
    try {
        let result = await SkillService.deleteSkill(req.body);
        return ControllerResponse.updateResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e)
    }
});

router.put('/update', async (req, res) => {
    try {
        let result = await SkillService.updateSkill(req.body);
        return ControllerResponse.updateResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e);
    }
});

router.get('/:page/:limit', async (req, res) => {
    try {
        const _payload = {
            page: req.params.page,
            limit: req.params.limit
        };
        const result = await SkillService.getSkillList(_payload);
        return ControllerResponse.getResponse(result);
    } catch (e) {
        return ControllerResponse.internalServerError(e);
    }
});

export default router;
