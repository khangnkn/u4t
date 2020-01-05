const Router = require("express");
const router = Router();

const SkillService = require("../services/skill.service");
const ControllerResponse = require('../utils/res/controller.response');
const SkillValidator = require("../utils/validator/skill.validator");
const ObjectIdValidator = require("../utils/validator/objectID.validator");

router.post('/',
    SkillValidator.addSkillValidationRules(),
    SkillValidator.validate,
    async (req, res) => {
        try {
            let result = await SkillService.addNewSkill(req.body);
            return await ControllerResponse.postResponse(res, result);
        } catch (e) {
            return await ControllerResponse.internalServerError(res, e);
        }
    }
);

router.get('/:page/:limit',
    async (req, res) => {
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
    }
);

router.put('/update/:id',
    ObjectIdValidator.objectIDValidationRules(),
    SkillValidator.validate,
    async (req, res) => {
        try {
            const payload = {
                id: req.params.id,
                update: req.body
            };
            let result = await SkillService.updateSkill(payload);
            return await ControllerResponse.updateResponse(res, result);
        } catch (e) {
            console.trace(e);
            return await ControllerResponse.internalServerError(res, e);
        }
    }
);

router.put('/delete/:id',
    ObjectIdValidator.objectIDValidationRules(),
    SkillValidator.validate,
    async (req, res) => {
        try {
            let result = await SkillService.deleteSkill(req.params.id);
            return await ControllerResponse.deleteResponse(res, result);
        } catch (e) {
            return await ControllerResponse.internalServerError(e)
        }
    }
);

module.exports = router;
