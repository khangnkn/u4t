const RevenueRepository = require('../repository/revenue.repository');
const RESPONSE_SERVICE = require('../utils/res/service.response');

const getRange = (range) => {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth();
    const date = current.getDate();
    let numDateInMonth = new Date(year, month, -1);

    let startCurrent, endCurrent, startLast, endLast;

    switch (range) {
        case 'today':
            startCurrent = new Date(year, month, date, 0, 0, 0);
            startLast = new Date(year, month, date - 1, 0, 0, 0);
            endCurrent = new Date(year, month, date, 23, 59, 59);
            endLast = new Date(year, month, date - 1, 23, 59, 59);
            break;
        case 'week':
            startCurrent = new Date(year, month, date);
            startLast = new Date(year, month, date);
            endCurrent = new Date(year, month, date);
            endLast = new Date(year, month, date);
            break;
        case 'month':
            startCurrent = new Date(year, month, 1, 0, 0, 0);
            startLast = new Date(year, month - 1, 1, 0, 0, 0);
            endCurrent = new Date(year, month, numDateInMonth.getDate() + 1, 23, 59, 59);
            endLast = new Date(year, month - 1, numDateInMonth.getDate() + 1, 23, 59, 59);
            break;
        case 'year':
            startCurrent = new Date(year, 0, 1, 0, 0, 0);
            startLast = new Date(year - 1, 0, 1, 0, 0, 0);
            endCurrent = new Date(year, 11, 31, 23, 59, 59);
            endLast = new Date(year - 1, 11, 31, 23, 59, 59);
            break;
        default:
            startCurrent = new Date(year, month, date, 0, 0, 0);
            endCurrent = new Date(year, month, date, 23, 59, 59);
    }
    return [startCurrent, endCurrent, startLast, endLast]
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

const getTotalRevenue = async (payload) => {
    const range = getRange(payload.range);
    let labels = [], dataset1 = [], dataset2 = [];
    switch (payload.range) {
        case 'today':
            labels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
            dataset1 = await getDatasetToday(range[0], range[1], labels.length);
            dataset2 = await getDatasetToday(range[2], range[3], labels.length);
            break;
        case 'week':
            labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            break;
        case 'month':
            labels = ['1', '7', '13', '19', '25', '31'];
            break;
        case 'year':
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            break;
        default:
            labels = ['00:00', '06:00', '12:00', '16:00', '20:00', '24:00'];
    }

    const result = {
        res: {
            labels: labels,
            datasets: [
                {
                    data: dataset1,
                },
                {
                    data: dataset2,
                },
            ]
        },
        err: null
    };
    return RESPONSE_SERVICE.serviceResponseDelete(result);
};

const getDatasetToday = async (start, end, len) => {
    let contractList = await RevenueRepository.getRevenueTotal(start, end);
    let dataset = new Array(len).fill(0);
    contractList.res.forEach((contract) => {
        let temp = new Date(contract.created_at);
        let index = Math.floor(temp.getHours() / 4);
        dataset[index] += contract.price
    });
    return dataset
};

module.exports = {
    getTopRevenueUser,
    getTopRevenueSkill,
    getTotalRevenue
};
