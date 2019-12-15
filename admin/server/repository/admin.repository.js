const AdminModel = require('../models/Admin');

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
            role: adminPayload.role``
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

module.exports = {
    save,
    findByUsername
};
