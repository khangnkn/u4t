const ContractModel = require('../shared/models/contract.model');

const addContract = async (payload) => {
    const contract = new ContractModel(payload);
    const res = await contract.save();
    return {
        err: false,
        res: res
    }
};

const getContractById = async (id) => {
    const res = await ContractModel
        .findById(id)
        .populate(['tutor', 'learner'])
        .exec();
    return {
        err: false,
        res: res
    }
};

const getContractListPagination = async (page, limit) => {
    const _query = {
        deleted_at: null
    };
    const _option = {
        page: page,
        limit: limit
    };
    const res = await ContractModel
        .paginate(_query, _option);
    return {
        err: false,
        res: res
    }
};

const updateContractById = async (id, payload) => {
    const update = payload;
    const res = await ContractModel
        .findOneAndUpdate({_id: id}, update, {new: true})
        .populate(['tutor', 'learner'])
        .exec();
    return {
        err: false,
        res: res
    }
};

const deleteContractById = async (id) => {
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
        .findOneAndUpdate(query, update, options)
        .populate(['tutor', 'learner'])
        .exec();
    return {
        err: false,
        res: res
    }
};

module.exports = {
    addContract,
    getContractById,
    getContractListPagination,
    updateContractById,
    deleteContractById
};
