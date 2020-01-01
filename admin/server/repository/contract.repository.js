const ContractModel = require('../shared/models/contract.model');

const addContract = async (payload) => {
    try {
        const contract = new ContractModel(payload);
        const res = await contract.save();
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

const updateContractById = async (payload) => {
    try {
        const update = {
            ...{},
            payload
        };

        const res = await ContractModel
            .findOneAndUpdate({ _id: payload.id }, update, { new: true });

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

const deleteContractById = async (id) => {
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

        const res = await ContractModel
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

const getContractById = async (id) => {
    try {
        const res = ContractModel
            .findById(id);
        
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

const getContractListPagination = async (page, limit) => {
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
    addContract,
    updateContractById,
    deleteContractById,
    getContractById,
    getContractListPagination
};
