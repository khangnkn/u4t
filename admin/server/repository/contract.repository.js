const ContractModel = require('../shared/models/contract.model');

const getContractList = async (page, limit) => {
    try {
        const _query = {};

        const _option = {
            page: page,
            limit: limit
        };

        const res = await ContractModel.paginate(_query, _option);

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
    getContractList
};
