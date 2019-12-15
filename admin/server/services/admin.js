const AdminRepository = require('../repository/admin.repository');


const addNew = async (admin) => {
    try {
        const _isAdminExisted = await AdminRepository.findByUsername(admin.username);
        if (_isAdminExisted.err) {
            return {
                err: _isAdminExisted.err,
                res: null
            }
        } else if (_isAdminExisted.res) {
            return {
                err: true,
                res: null,
                info: 'Username existed.'
            }
        }
        else {
            const res = await AdminRepository.save(admin);
            return {
                err: false,
                res: res
            }
        }
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};


module.exports = {
    addNew
};
