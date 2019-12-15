const AdminModel = require('../shared/models/admin.model');

const save = async (adminPayload) => {
    try {
        console.log('Repository add new admin ' + adminPayload);
        const admin = new AdminModel({
            username: adminPayload.username,
            password: adminPayload.password,
            email: adminPayload.email,
            fullname: adminPayload.fullname,
            avatar: adminPayload.avatar,
            is_active: adminPayload.is_active,
            role: adminPayload.role
        });

        const res = await admin.save()
        return {
            err: false,
            res: res
        }
    } catch (e) {
        return {
            err: e,
            res: false
        }
    }
};

const findByUsername = async (username) => {
    try {
        let res = await AdminModel.findOne({username: username});
        return {
            err: false,
            res: res
        }
    } catch (e) {
        return {
            err: e,
            res: false
        }
    }
};


const getAdminList = async (type, page, limit) => {
    try {
        const _query = {
            role: type
        };

        const _option = {
            page: page,
            limit: limit
        };

        const res = await AdminModel.paginate(_query, _option);

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
    save,
    findByUsername,
    getAdminList
};
