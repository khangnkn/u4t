const UserModel = require("../shared/models/user.model");

const getUserList = async (type, page, limit) => {
    try {
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
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};

const getUserByUsername = async (username) => {
    try {
        const res = await UserModel
            .findOne({username: username})
            .populate(['city', 'data.skills'])
            .exec();
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

const updateActiveUserByUsername = async (isActive, username) => {
    try {
        const query = {
            username
        };
        const update = {
            is_active: isActive
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
    } catch (e) {
        return {
            err: e,
            res: null
        }
    }
};

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

const updateUserById = async (id, payload) => {
    try {
        const update = {...{}, ...payload};
        const res = await UserModel
            .findOneAndUpdate({_id: id}, update, {new: true});
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

const deleteUserById = async (id) => {
    try {
        const query = {
            _id: id
        };
        const update = {
            delete_ad: Date.now()
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
    getUserByUsername,
    updateUserById,
    updateActiveUserByUsername,
    deleteUserById,
};
