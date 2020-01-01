const RES_CONSTANT = require("../shared/constant/response_code");
const UserRepository = require('../repository/user.repository');
const ServiceResponse = require('../utils/res/service.response');

const addNewUser = async (payload) => {
    const res = UserRepository.addNewUser(payload);
    return ServiceResponse.serviceResponseCreate(res);
};

const getUserList = async (payload) => {
    let result = {};
    if (payload.role === '0' || payload.role === '1') {
        result = await UserRepository.getUserList(payload.role, payload.page, payload.limit)
    } else {
        return {
            err: RES_CONSTANT.USERTYPE_INCORRECT,
            res: null
        }
    }
    return ServiceResponse.serviceResponseRead(result)
};

const getUserDetail = async (payload) => {
    let result = await UserRepository.getUserByUsername(payload.username);
    return ServiceResponse.serviceResponseRead(result);
};

const updateActiveUser = async (payload) => {
    let result = await UserRepository.updateActiveUserByUsername(payload.isActive, payload.username);
    return ServiceResponse.serviceResponseUpdate(result);
};

const updateUserDetail = async (id, payload) => {
    let result = await UserRepository.updateUserById(id, payload);
    return ServiceResponse.serviceResponseUpdate(result);
};

const deleteUser = async (id) => {
    let result = await UserRepository.deleteUserById(id);
    return ServiceResponse.serviceResponseDelete(result);
};

module.exports = {
    addNewUser,
    getUserList,
    getUserDetail,
    updateActiveUser,
    updateUserDetail,
    deleteUser
};