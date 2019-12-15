const UserModel = require('../shared/models/user.model');

const getUserList = async (type, page, limit) => {
    try {
        const _query = {
            role: type
        };

        const _option = {
            page: page,
            limit: limit
        };

        const res = await UserModel.paginate(_query, _option);

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

const getUserDetailByUsername = async (username) => {
    try {
        const res = await UserModel.findOne({username: username})
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

        const res = await UserModel.findOneAndUpdate(query, update, options);

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
    getUserList,
    getUserDetailByUsername,
    updateActiveUserByUsername
};
