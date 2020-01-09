const errorResponse = (e) => {
    console.log(e)
    if (e.response) {
        console.log(e.response.data)
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
    }
    return {
        res: false,
        errors: e,
        errorMessage: e.message
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
