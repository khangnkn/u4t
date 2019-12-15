const ADD_ADMIN_SUCCESS = {
    code: 'A01',
    message: 'Add new admin success.'
};

const USERNAME_EXISTED = {
    code: 'U01',
    message: 'Username existed.'
};

const USERNAME_NOT_EXIST = {
    code: 'U02',
    message: 'Username does not exist.'
};

const USERTYPE_INCORRECT = {
    code: 'U02',
    message: 'Usertype incorrect.'
};

const GET_USER_LIST = {
    code: 'U11',
    message: 'Get user list success.'
};

const LOCK_USER_SUCCESS = {
    code: 'U12',
    message: 'Lock user success.'
};

const UNLOCK_USER_SUCCESS = {
    code: 'U13',
    message: 'Unlock user success.'
};

const GET_USER_DETAIL_SUCCESS = {
    code: 'U14',
    message: 'Get user detail success.'
};

const LOG_IN_SUCCESS = {
    code: 'A10',
    message: 'Login success.'
};

const PASSWORD_INCORRECT = {
    code: 'U03',
    message: 'Incorrect password.'
};

const DB_ERROR = {
    code: 'DB01',
    message: 'Error when query database'
};

const SERVICE_ERROR = {
    code: 'SV01',
    message: 'Error when excu service'
};

module.exports = {
    LOG_IN_SUCCESS,
    ADD_ADMIN_SUCCESS,
    USERNAME_EXISTED,
    USERNAME_NOT_EXIST,
    USERTYPE_INCORRECT,
    GET_USER_LIST,
    GET_USER_DETAIL_SUCCESS,
    LOCK_USER_SUCCESS,
    UNLOCK_USER_SUCCESS,
    PASSWORD_INCORRECT,
    DB_ERROR,
    SERVICE_ERROR
};


