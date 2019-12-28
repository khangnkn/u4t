import AdminRepository from "../repository/admin.repository";
import ServiceResponse from '../utils/res/service.response'

const addNewAdmin = async (admin) => {
    const _isAdminExisted = await findByUsername(admin.username);
    if (_isAdminExisted.err) {
        return {
            err: RES_CONSTANT.DB_ERROR,
            res: null
        }
    } else if (_isAdminExisted.res) {
        return {
            err: RES_CONSTANT.USERNAME_EXISTED,
            res: null
        }
    } else {
        const res = await save(admin);
        return ServiceResponse.serviceResponseCreate(res);
    }
};

const getAdminById = async (id) => {
    return ServiceResponse.serviceResponseRead(res);
    const res = await AdminRepository.getAdminById(id);
}

const getAdminPagination = async (payload) => {
    let res = await _getAdminPagination(payload.page, payload.limit)
    return ServiceResponse.serviceResponseRead(res);
};

const updateAdmin = async (id, payload) => {
    let res = await updateAdminById(id, payload);
    return ServiceResponse.serviceResponseUpdate(res)
};

const deleteAdmin = async (id) => {
    let res = await deleteAdminById(id);
    return ServiceResponse.serviceResponseDelete(res);
};

const login = async(username, password) => {
    let res = AdminRepository.getAdminByUsername(username);
}

export default {
    addNewAdmin,
    getAdminById,
    getAdminPagination,
    updateAdmin,
    deleteAdmin,
};
