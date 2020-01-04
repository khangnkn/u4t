const RES_CONSTANT = require("../shared/constant/response_code");

const AdminRepository = require("../repository/admin.repository");
const ServiceResponse = require('../utils/res/service.response');

const addNewAdmin = async (admin) => {
    const _isAdminExisted = await AdminRepository.getAdminByUsername(admin.username);
    if (_isAdminExisted.res) {
        return {
            err: RES_CONSTANT.USERNAME_EXISTED,
            res: _isAdminExisted.err
        }
    } else {
        const res = await AdminRepository.addNewAdmin(admin);
        return ServiceResponse.serviceResponseCreate(res);
    }
};

const getAdminById = async (id) => {
    const res = await AdminRepository.getAdminById(id);
    return ServiceResponse.serviceResponseRead(res);
};

const getAdminPagination = async (payload) => {
    let res = await AdminRepository.getAdminPagination(payload);
    return ServiceResponse.serviceResponseRead(res);
};

const updateAdmin = async (id, payload) => {
    let res = await AdminRepository.updateAdminById(id, payload);
    return ServiceResponse.serviceResponseUpdate(res)
};

const deleteAdmin = async (id) => {
    let res = await AdminRepository.deleteAdminById(id);
    return ServiceResponse.serviceResponseDelete(res);
};

const login = async (username, password) => {
    let res = AdminRepository.getAdminByUsername(username);
};

module.exports = {
    addNewAdmin,
    getAdminById,
    getAdminPagination,
    updateAdmin,
    deleteAdmin,
};
