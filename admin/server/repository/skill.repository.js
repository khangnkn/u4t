const SkillModel = require('../shared/models/skill.model');

const findSkillByName = async (name) => {
    try {
        const res = await SkillModel.findOne({name: name});
        return {
            err: false,
            res: res
        }
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
}

const addSkill = async (name) => {
    try {
        const skill = new SkillModel({
            name: name
        });
        const res = await skill.save(skill);
        return {
            err: false,
            res: res
        }
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};

const deleteSkillById = async (id) => {
    try {
        const res = SkillModel.findOneAndDelete({id: id});
        return {
            err: res,
            res: null
        }
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};

const updateSkillById = async (skill) => {
    try {
        const res = await SkillModel.findOneAndUpdate({id: skill.id}, skill, {new: true})
        return {
            err: false,
            res: res
        }
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};

const getSkillList = async (type, page, limit) => {
    try {
        const _query = {
            role: type
        };

        const _option = {
            page: page,
            limit: limit
        };

        const res = await SkillModel.paginate(_query, _option);

        return {
            err: false,
            res: res
        }

    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};


module.exports = {
    getSkillList,
    findSkillByName,
    addSkill,
    updateSkillById,
    deleteSkillById
};
