const errorResponse = (e) => {
    console.log(e.response);
    if (e.response.data.dt.code === 11000) {
        return {
            res: false,
            errors: {
                name: e.response.data.dt.codeName
            },
            errorMessage: e.response.data.dt.name
        }
    }
    return {
        res: false,
        errors: e.response.data.dt,
        errorMessage: e.response.data.msg
    }
};

const successResponse = (res) => {
    console.log(res);
    return {
        res: true,
        errors: {},
        errorMessage: ''
    }
};

module.exports = {
    errorResponse,
    successResponse
};
