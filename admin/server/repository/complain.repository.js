const ComplainModel = require('../shared/models/complain.model');

const getComplainList = async (page, limit) => {
    try {
        const _query = {};

        const _option = {
            page: page,
            limit: limit
        };

        const res = await ComplainModel.paginate(_query, _option);

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
    getComplainList
};
