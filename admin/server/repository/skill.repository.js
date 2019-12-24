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
};

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
        const query = {
            _id: id
        };
        const update = {
            deleted_at: Date.now()
        };
        const options = {
            new: true
        };

        const res = await SkillModel.findOneAndUpdate(query, update, options);

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

const updateSkillById = async (skill) => {
    try {
        const update = {
            name: skill.name,
            updated_at: Date.now()
        };
        const res = await SkillModel
            .findOneAndUpdate({_id: skill.id}, update, {new: true});

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

const getSkillList = async (page, limit) => {
    try {
        const query = {
            deleted_at: null
        };

        const _option = {
            page: page,
            limit: limit
        };

        const res = await SkillModel.paginate(query, _option);

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
