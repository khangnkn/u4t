const UserRepository = require('../repository/user.repository');
const AdminRepository = require('../repository/admin.repository');
const RES_CONSTANT = require('../shared/constant/response_code');

const getUserList = async (payload) => {
    try {
        let result = {};

        if (payload.role === '0' || payload.role === '1') {
            result = await UserRepository.getUserList(payload.role, payload.page, payload.limit)
        } else if (payload.role === '2' || payload.role === '3') {
            result = await AdminRepository.getAdminList(payload.role, payload.page, payload.limit)
        } else {
            return {
                err: RES_CONSTANT.USERTYPE_INCORRECT,
                res: null
            }
        }

        if (result.err) {
            return {
                err: RES_CONSTANT.DB_ERROR,
                res: null
            }
        }
        return {
            err: false,
            res: RES_CONSTANT.GET_USER_LIST,
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

const getUserDetail = async (payload) => {
    try {
        let result = await UserRepository.getUserDetailByUsername(payload.username);

        if (result.err) {
            return {
                err: RES_CONSTANT.DB_ERROR,
                res: null
            }
        } else if (!result.res) {
            return {
                err: RES_CONSTANT.USERNAME_NOT_EXIST,
                res: null
            }
        }
        return {
            err: false,
            res: RES_CONSTANT.GET_USER_DETAIL_SUCCESS,
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


const updateActiceUser = async (payload) => {
    try {
        let result = await UserRepository.updateActiveUserByUsername(payload.isActive, payload.username);

        if (result.err) {
            return {
                err: RES_CONSTANT.DB_ERROR,
                res: null
            }
        } else if (!result.res) {
            return {
                err: RES_CONSTANT.USERNAME_NOT_EXIST,
                res: null
            }
        }
        return {
            err: false,
            res: payload.isActive ? RES_CONSTANT.UNLOCK_USER_SUCCESS : RES_CONSTANT.LOCK_USER_SUCCESS,
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
    getUserList,
    getUserDetail,
    updateActiceUser,
};
