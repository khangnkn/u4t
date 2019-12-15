const ResponseFormat = {
    success: (code, msg, dt) => {
        return {
            code: code,
            msg: msg,
            dt: dt,
            stt: 'success',
        }
    },
    login_success: (dt) => {
        return {
            code: 'AT1',
            msg: 'Authenticaton success.',
            dt: dt,
            stt: 'success',
        }
    },
    error: (code, msg, dt) => {
        return {
            code: code,
            msg: msg,
            dt: dt,
            stt: 'error',
        }
    },
    repository_error: (msg, dt) => {
        return {
            code: 'RPE0',
            msg: msg,
            dt: dt,
            stt: 'error'
        }
    },
    service_error: (msg, dt) => {
        return {
            code: 'SVE0',
            msg: msg,
            dt: dt,
            stt: 'error'
        }
    },
    controller_error: (msg, dt) => {
        return{
            code: 'CTE0',
            msg: msg,
            dt: dt,
            stt: 'error'
        }
    }
};

module.exports = ResponseFormat;
