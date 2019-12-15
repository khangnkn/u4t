const RES_CONSTANT = require('../shared/constant/response_code');

const AdminRepository = require('../repository/admin.repository');


const addNew = async (admin) => {
    try {
        const _isAdminExisted = await AdminRepository.findByUsername(admin.username);
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
            const res = await AdminRepository.save(admin);
            if (res.err) {
                return {
                    err: RES_CONSTANT.DB_ERROR,
                    res: null
                }
            }
            return {
                err: false,
                res: RES_CONSTANT.ADD_ADMIN_SUCCESS,
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


module.exports = {
    addNew
};
