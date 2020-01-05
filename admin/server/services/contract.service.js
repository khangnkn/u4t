const ContractRepository = require("../repository/contract.repository");
const RESPONSE_SERVICE = require('../utils/res/service.response');

const addNewContract = async (payload) => {
    const res = await ContractRepository.addContract(payload);
    return RESPONSE_SERVICE.serviceResponseCreate(res);
};

const updateContract = async (payload) => {
    const res = await ContractRepository.updateContractById(payload.id, payload.update);
    return RESPONSE_SERVICE.serviceResponseUpdate(res);
};

const deleteContract = async (id) => {
    const res = await ContractRepository.deleteContractById(id);
    return RESPONSE_SERVICE.serviceResponseDelete(res);
};

const getContractById = async (id) => {
    const res = await ContractRepository.getContractById(id);
    return RESPONSE_SERVICE.serviceResponseRead(res);
};

const getContractPaginate = async (payload) => {
    const res = await ContractRepository.getContractListPagination(payload.page, payload.limit);
    return RESPONSE_SERVICE.serviceResponseRead(res);
};

module.exports = {
    addNewContract,
    updateContract,
    deleteContract,
    getContractById,
    getContractPaginate
};
