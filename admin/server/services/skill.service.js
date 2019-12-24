const SkillRepository = require('../repository/skill.repository');
const RES_CONSTANT = require('../shared/constant/response_code');

const addNewSkill = async (payload) => {
    try {
        let _isExited = await SkillRepository.findSkillByName(payload.name);
        if (_isExited.err) {
            return {
                err: RES_CONSTANT.DB_ERROR,
                res: null,
                data: _isExited.err
            }
        } else {
            if (_isExited.res) {
                return {
                    err: RES_CONSTANT.ITEM_EXISTED,
                    res: null,
                    data: _isExited.res
                }
            } else {
                let result = await SkillRepository.addSkill(payload.name);
                if (result.err) {
                    return {
                        err: RES_CONSTANT.DB_ERROR,
                        res: null,
                        data: _isExited.err
                    }
                }
                return {
                    err: null,
                    res: RES_CONSTANT.ADD_ITEM_SUCCESS,
                    data: result.res
                }
            }
        }

    } catch (e) {
        return {
            err: true,
            res: {
                code: 'UK0',
                message: e.message()
            }
        }
    }
};

const deleteSkill = async (payload) => {
        try {
            let result = await SkillRepository.deleteSkillById(payload.id);
            if (result.err) {
                return {
                    err: RES_CONSTANT.DB_ERROR,
                    res: null,
                    data: result.err
                }
            } else if (result.res == null) {
                return {
                    err: RES_CONSTANT.ITEM_NOT_EXISTED,
                    res: null,
                    data: result.err
                }
            }
            return {
                err: null,
                res: RES_CONSTANT.DELETE_ITEM_SUCCESS,
                data: result.res
            }

        } catch (e) {
            return {
                err: true,
                res: {
                    code: 'UK0',
                    message: e.message()
                }
            }
        }
    };

const updateSkill = async (payload) => {
        try {
            let result = await SkillRepository.updateSkillById(payload);
            if (result.err) {
                return {
                    err: RES_CONSTANT.DB_ERROR,
                    res: null,
                    data: result.err
                }
            } else if (result.res == null) {
                return {
                    err: RES_CONSTANT.ITEM_NOT_EXISTED,
                    res: null,
                    data: result.err
                }
            }
            return {
                err: null,
                res: RES_CONSTANT.UPDATE_ITEM_SUCCESS,
                data: result.res
            }

        } catch (e) {
            return {
                err: true,
                res: {
                    code: 'UK0',
                    message: e.message()
                }
            }
        }
    };

const getSkillList = async (payload) => {
    try {
        let result = await SkillRepository.getSkillList(payload.page, payload.limit)

        if (result.err) {
            return {
                err: RES_CONSTANT.DB_ERROR,
                res: null,
                data: result.err
            }
        }
        return {
            err: false,
            res: RES_CONSTANT.GET_ITEMS_LIST,
            data: result.res
        }
    } catch (e) {
        return {
            err: true,
            res: {
                code: 'UK0',
                message: e.message()
            }
        }
    }
};

module.exports = {
    getSkillList,
    addNewSkill,
    updateSkill,
    deleteSkill
};
