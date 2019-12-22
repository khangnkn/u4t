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
                ResponseFormat.success(result.res.code, result.res.message, null)
            );
        }
    } catch (e) {
        return await res.status(400).json(
            ResponseFormat.controller_error(e.message, e)
        )
    }
});

router.get('/:page/:skillsPerPage', (req, res) => {
    res.json('/:page/:skillsPerPage');
});

module.exports = router;
