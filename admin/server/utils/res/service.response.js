import * as RES_CONSTANT from "../shared/constant/response_code";

const serviceResponseCreate = (payload) => {
  if (payload.err) {
    return {
      err: RES_CONSTANT.DB_ERROR,
      res: null,
      data: payload.err
    }
  }
  return {
    err: false,
    res: RES_CONSTANT.ADD_ITEM_SUCCESS,
    data: payload.res
  }
}

const serviceResponseRead = (payload) => {
  if (payload.err) {
    return {
      err: RES_CONSTANT.DB_ERROR,
      res: null,
      data: payload.err
    }
  }
  return {
    err: false,
    res: RES_CONSTANT.GET_ITEM,
    data: payload.res
  }
}

const serviceResponseUpdate = (payload) => {
  if (payload.err) {
    return {
      err: RES_CONSTANT.DB_ERROR,
      res: null,
      data: payload.err
    }
  } else if (payload.res == null) {
    return {
      err: RES_CONSTANT.ITEM_NOT_EXISTED,
      res: null,
      data: payload.err
    }
  }
  return {
    err: null,
    res: RES_CONSTANT.UPDATE_ITEM_SUCCESS,
    data: payload.res
  }
}

const serviceResponseDelete = (payload) => {
  if (payload.err) {
    return {
      err: RES_CONSTANT.DB_ERROR,
      res: null,
      data: payload.err
    }
  } else if (payload.res == null) {
    return {
      err: RES_CONSTANT.ITEM_NOT_EXISTED,
      res: null,
      data: payload.err
    }
  }
  return {
    err: null,
    res: RES_CONSTANT.DELETE_ITEM_SUCCESS,
    data: payload.res
  }
}

const serviceResponseLogin = (payload) => {
  
}

export default {
  serviceResponseCreate,
  serviceResponseRead,
  serviceResponseUpdate,
  serviceResponseDelete
};