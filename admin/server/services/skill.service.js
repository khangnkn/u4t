import SkillRepository from "../repository/skill.repository";
import ServiceResponse from "../utils/res/service.response";

const addNewSkill = async (payload) => {
    let isExisted = await SkillRepository.findSkillByName(payload.name);
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
    let result = await SkillRepository.updateSkillById(payload);
    return ServiceResponse.serviceResponseUpdate(result);
};

const deleteSkill = async (payload) => {
    let result = await SkillRepository.deleteSkillById(payload.id);
    return ServiceResponse.serviceResponseDelete(result);
};

const getSkillList = async (payload) => {
    let result = await SkillRepository.getSkillListPagination(payload.page, payload.limit);
    return ServiceResponse.serviceResponseRead(result);
};

export default {
    getSkillList,
    updateSkill,
    addNewSkill,
    deleteSkill
};
