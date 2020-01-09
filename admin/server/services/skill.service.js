const SkillRepository = require("../repository/skill.repository");
const ServiceResponse = require("../utils/res/service.response");
const RES_CONSTANT = require("../shared/constant/response_code");

const addNewSkill = async (payload) => {
    let isExisted = await SkillRepository.getSkillByName(payload.name);
    if (isExisted.err) {
        return {
            err: RES_CONSTANT.DB_ERROR,
            res: null,
            data: isExisted.err
        }
    } else if (isExisted.res) {
        return {
            err: RES_CONSTANT.ITEM_EXISTED,
            res: null,
            data: isExisted.res
        }
    } else {
        let result = await SkillRepository.addSkill(payload.name);
        return ServiceResponse.serviceResponseCreate(result);
    }
};

const updateSkill = async (payload) => {
    let result = await SkillRepository.updateSkillById(payload.id, payload.update);
    return ServiceResponse.serviceResponseUpdate(result);
};

const deleteSkill = async (id) => {
    let result = await SkillRepository.deleteSkillById(id);
    return ServiceResponse.serviceResponseDelete(result);
};

const getSkillList = async (payload) => {
    let result = await SkillRepository.getSkillListPagination(payload.page, payload.limit);
    return ServiceResponse.serviceResponseRead(result);
};

module.exports = {
    getSkillList,
    updateSkill,
    addNewSkill,
    deleteSkill
};
