const express = require('express');
const router = express.Router();
const {ResponseFormat} = require('../core');

const SkillService = require('../services/skill.service');

router.post('/', async (req, res) => {
    try {
        let result = await SkillService.addNewSkill(req.body);
        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(201).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

router.put('/delete', async (req, res) => {
    try {
        let result = await SkillService.deleteSkill(req.body);
        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

router.put('/update', async (req, res) => {
    try {
        let result = await SkillService.updateSkill(req.body);
        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, null)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});



router.get('/:page/:limit', async (req, res) => {
    try {
        const _payload = {
            page: req.params.page,
            limit: req.params.limit
        };

        const result = await SkillService.getSkillList(_payload);

        if (result.err) {
            return await res.status(400).json(
                ResponseFormat.error(result.err.code, result.err.message, result.data.message)
            )
        } else if (result.res) {
            return await res.status(200).json(
                ResponseFormat.success(result.res.code, result.res.message, result.data)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

module.exports = router;
