const ContractModel = require('../shared/models/contract.model');

const getRevenueSortByUser = async (start, end) => {
    const query = {
        created_at: {$gte: start, $lt: end}
    };
    const sortCondition = {
        tutor: 1
    };
    const res = await ContractModel
        .find(query)
        .populate(['tutor'])
        .sort(sortCondition);

    return {
        res: res,
        err: null
    }
};

const getRevenueSortBySkill = async (start, end) => {
    const query = {
        created_at: {$gte: start, $lt: end}
    };
    const sortCondition = {
        skill: 1
    };
    const res = await ContractModel
        .find(query)
        .populate(['skill'])
        .sort(sortCondition);

    return {
        res: res,
        err: null
    }
};

const getRevenueTotal = async (start, end) => {
    const query = {
        created_at: {$gte: start, $lt: end}
    };
    const sortCondition = {
        created_at: 1
    };
    const res = await ContractModel
        .find(query)
        .sort(sortCondition);

    return {
        res: res,
        err: null
    }
};

module.exports = {
    getRevenueSortByUser,
    getRevenueSortBySkill,
    getRevenueTotal
};
