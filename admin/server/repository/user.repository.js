const UserModel = require("../shared/models/user.model");

const addNewUser = async (payload) => {
    try {
        let user = new UserModel(payload);
        const res = await user.save();
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

const getUserById = async (id) => {
    const res = await UserModel
        .findOne({_id: id})
        .populate(['city', 'data.skills'])
        .exec();
    return {
        err: false,
        res: res
    }
};

const getUserList = async (type, page, limit) => {
    const _query = {
        role: type
    };
    const _option = {
        page: page,
        limit: limit
    };
    const res = await UserModel
        .paginate(_query, _option);
    return {
        err: false,
        res: res
    }
};

const updateUserById = async (id, payload) => {
    const update = {...{}, ...payload};
    const res = await UserModel
        .findOneAndUpdate({_id: id}, update, {new: true});
    return {
        err: false,
        res: res
    }
};

const deleteUserById = async (id) => {
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
        const res = await UserModel
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
    addNewUser,
    getUserList,
    getUserById,
    updateUserById,
    deleteUserById,
};
