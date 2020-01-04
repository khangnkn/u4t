const AdminModel = require('../shared/models/admin.model');
const CityModel = require('../shared/models/city.model');

const addNewAdmin = async (adminPayload) => {
    try {
        console.log('Repository add new admin ' + adminPayload);
        const admin = new AdminModel({
            avatar: adminPayload.avatar,
            username: adminPayload.username,
            password: adminPayload.password,
            email: adminPayload.email,
            fullname: adminPayload.fullname,
            city: new CityModel(adminPayload.city),
            is_active: adminPayload.is_active,
            sex: adminPayload.sex,
            role: adminPayload.role,
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

const getAdminByUsername = async (username) => {
    let res = await AdminModel
        .findOne({username: username});
    return {
        err: false,
        res: res
    }
};

const getAdminById = async (id) => {
    try {
        let res = await AdminModel
            .findOne({_id: id});
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

const getAdminPagination = async (payload) => {
    try {
        const role = payload.role;
        const page = payload.page ? payload.page : 1;
        const limit = payload.limit ? payload.limit : 10;
        const _query = {
            role: role
        };
        const _option = {
            page: page,
            limit: limit
        };
        const res = await AdminModel
            .paginate(_query, _option);
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

const updateAdminById = async (id, adminPayload) => {
    try {
        const query = {
            _id: id
        };
        const update = adminPayload
        const options = {
            new: true
        };
        const res = await AdminModel
            .findOneAndUpdate(query, update, options);

        return {
            err: false,
            res: res
        }
    } catch (error) {
        return {
            err: error,
            res: null
        }
    }
};

const deleteAdminById = async (id) => {
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

        const res = await AdminModel
            .findOneAndUpdate(query, update, options);

        return {
            err: false,
            res: res
        }
    } catch (error) {
        return {
            err: error,
            res: null
        }
    }
};

module.exports = {
    addNewAdmin,
    getAdminById,
    getAdminByUsername,
    getAdminPagination,
    updateAdminById,
    deleteAdminById,
};
