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
    let result = await UserRepository.getUserById(payload.id);
    return ServiceResponse.serviceResponseRead(result);
};

const updateActiveUser = async (payload) => {
    let result = await UserRepository.updateUserById(payload.id, payload.update);
    return ServiceResponse.serviceResponseUpdate(result);
};

const updateUserDetail = async (id, payload) => {
    const updateUser = {...payload};
    const ignoreFields = ['avatar', 'username', 'email', 'role'];
    ignoreFields.forEach((item) => {
        delete updateUser[item]
    });
    let res = await UserRepository.updateUserById(id, updateUser);
    return ServiceResponse.serviceResponseUpdate(res)
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
