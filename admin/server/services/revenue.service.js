const RevenueRepository = require('../repository/revenue.repository');
const RESPONSE_SERVICE = require('../utils/res/service.response');

const getRange = (range) => {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth();
    const date = current.getDate();
    let numDateInMonth = new Date(year, month, -1);

    let start, end;

    switch (range) {
        case 'today':
            start = new Date(year, month, date, 0, 0, 0);
            end = new Date(year, month, date, 23, 59, 59);
            break;
        case 'week':
            start = new Date(year, month, date);
            end = new Date(year, month, date);
            break;
        case 'month':
            start = new Date(year, month, 1, 0, 0, 0);
            end = new Date(year, month, numDateInMonth.getDate() + 1, 23, 59, 59);
            break;
        case 'year':
            start = new Date(year, 0, 1, 0, 0, 0);
            end = new Date(year, 11, 31, 23, 59, 59);
            break;
        default:
            start = new Date(year, month, date, 0, 0, 0);
            end = new Date(year, month, date, 23, 59, 59);
    }
    return [start, end]
};

const getTopRevenueUser = async (payload) => {
    const range = getRange(payload.range);
    let contractList = await RevenueRepository.getRevenueSortByUser(range[0], range[1]);
    let len = contractList.res.length;
    let revenueTotalList = new Array(len).fill({total: 0, tutor: {}});
    let index = -1;
    let currentTutor = '-1';
    contractList.res.map((contract) => {
        if (!contract.tutor) {
            return
        }
        if (!contract.tutor.equals(currentTutor)) {
            currentTutor = contract.tutor;
            index += 1;
        }
        const update = {
            ...{
                tutor: currentTutor,
                total: revenueTotalList[index].total + contract.price
            }
        };
        revenueTotalList[index] = update;
    });

    revenueTotalList.sort((item1, item2) => item2.total - item1.total);

    const res = {
        res: revenueTotalList,
        err: null
    };
    return RESPONSE_SERVICE.serviceResponseDelete(res);
};

const getTopRevenueSkill = async (payload) => {
    const range = getRange(payload.range);
    let contractList = await RevenueRepository.getRevenueSortBySkill(range[0], range[1]);
    let len = contractList.res.length;
    let revenueTotalList = new Array(len).fill({total: 0, skill: {}});
    let index = -1;
    let currentSkill = '-1';
    contractList.res.map((contract) => {
        if (!contract.skill) {
            return
        }
        if (!contract.skill.equals(currentSkill)) {
            currentSkill = contract.skill;
            index += 1;
        }
        const update = {
            ...{
                skill: currentSkill,
                total: revenueTotalList[index].total + contract.price
            }
        };
        revenueTotalList[index] = update;
    });

    revenueTotalList.sort((item1, item2) => item2.total - item1.total);

    const res = {
        res: revenueTotalList,
        err: null
    };
    return RESPONSE_SERVICE.serviceResponseDelete(res);
};


module.exports = {
    getTopRevenueUser,
    getTopRevenueSkill
};
