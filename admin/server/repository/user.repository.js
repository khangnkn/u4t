import UserModel, { paginate, findOne, findOneAndUpdate } from "../shared/models/user.model";

const getUserList = async (type, page, limit) => {
    try {
        const _query = {
            role: type
        };

        const _option = {
            page: page,
            limit: limit
        };

        const res = await paginate(_query, _option);

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
        const res = await findOne({ username: username })
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

        const res = await findOneAndUpdate(query, update, options);

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
}

const updateUserById = async (id, payload) => {
    try {
        const update = { ...{}, ...payload };
        const res = await findOneAndUpdate({ _id: id }, update, { new: true });

        return {
            err: false,
            res: res
        }

    } catch (error) {
        return {
            err: e,
            res: null
        }
    }
}

const deleteUserById = async (id) => {
    try {
        const quert = {
            _id: id
        };
        const update = {
            delete_ad: Date.now()
        };
        const options = {
            new: true
        }

        const res = await findOneAndUpdate(query, update, options);

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
}

export default {
    addNewUser,
    updateUserById,
    updateActiveUserByUsername,
    deleteUserById,
    getUserList,
    getUserDetailByUsername,
};
