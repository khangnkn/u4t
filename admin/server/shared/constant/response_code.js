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

const GET_ITEMS_LIST = {
    code: "GT10",
    message: 'Get items list successful.'
};

const GET_ITEMS_LIST_FAIL = {
    code: "GT00",
    message: 'Get items list fail.'
};

const GET_ITEM = {
    code: "GT11",
    message: 'Get item successful.'
};

const GET_ITEM_FAIL = {
    code: "GT01",
    message: 'Get item fail.'
};

const ADD_ITEM_SUCCESS = {
    code: 'AD10',
    message: 'Add new item successful.'
};

const ADD_ITEM_FAIL = {
    code: 'AD01',
    message: 'Add new item fail.'
};

const UPDATE_ITEM_SUCCESS = {
    code: 'UD10',
    message: 'Update item successful.'
};

const UPDATE_ITEM_FAIL = {
    code: 'UD01',
    message: 'Update item fail.'
};

const DELETE_ITEM_SUCCESS = {
    code: 'DL10',
    message: 'Delete item successful.'
};

const DELETE_ITEM_FAIL = {
    code: 'DL01',
    message: 'Delete item fail.'
};

const ITEM_EXISTED = {
    code: 'NE10',
    message: 'Item existed'
};

const ITEM_NOT_EXISTED = {
    code: 'NE00',
    message: 'Item not existed'
};

export default {
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
    SERVICE_ERROR,
    GET_ITEM,
    GET_ITEM_FAIL,
    GET_ITEMS_LIST,
    GET_ITEMS_LIST_FAIL,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
    ITEM_EXISTED,
    ITEM_NOT_EXISTED
};


