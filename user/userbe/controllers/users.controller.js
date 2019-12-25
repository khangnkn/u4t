const SC = require('http-status-codes');
const { User } = require('../models');
const Error = require('../utils/error');
const UserRepository = require('../repository/user.repository');


const parseUser = (infor, data) => {
  const result = {
    email: infor.email,
    fullname: infor.fullname,
    address: infor.address,
    gender: infor.gender,
    phone: infor.phone,
    city: infor.city,
    role: infor.role,
  };
  if (!data) {
    return result;
  }
  if (infor.role === 1) {
    const metadata = {
      level: data.level,
      skills: data.skills,
      intro: data.intro,
      price: data.price,
    };
    result.data = metadata;
  }

  return result;
};

const UpdateUserInfo = (req, res, next) => {
  const { body } = req;
  const info = JSON.parse(body.infor);
  const user = parseUser(info, null);
  console.log('user: ', user);
  const avatar = req.file.path;
  const id = res.locals.user._id;
  user.avatar = avatar;
  console.log(user);
  User.findByIdAndUpdate(id, user).populate(['city', 'data.level', 'data.skills']).exec((err, foundUser) => {
    if (err) {
      return next({
        status: SC.INTERNAL_SERVER_ERROR,
        code: Error.UnknownError,
        message: 'error updating user',
        extra: `${err}`,
      });
    }
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: {
        user: foundUser,
      },
    });
  });
};

const GetInfoHandler = async (req, res, next) => {
  try {
    console.log(res.locals.user);
    // eslint-disable-next-line no-underscore-dangle
    const id = res.locals.user._id;
    const user = await UserRepository.GetById(id);
    console.log(user);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: user,
    });
  } catch (error) {
    return next({
      status: SC.BAD_REQUEST,
      code: Error.UnknownError,
      message: 'unexpected error occured',
      extra: error,
    });
  }
};

const UserDetailHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id === '') {
      throw new Error('id not found');
    }
    const user = await UserRepository.GetById(id);
    console.log(user);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: user,
    });
  } catch (ex) {
    return next({
      status: SC.BAD_REQUEST,
      code: Error.UnknownError,
      message: 'unexpected error occured',
      extra: ex,
    });
  }
};

const SearchHandler = async (req, res, next) => {
  const { query } = req;
  if (query.name) {
    query.fullname = {
      $regex: `.*${query.name}.*`,
    };
    delete query.name;
  }
  Object.keys(query).forEach((k) => (!query[k] && query[k] !== undefined) && delete query[k]);
  try {
    console.log(query);
    const users = await UserRepository.SearchByQuery(query);
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: users,
    });
  } catch (ex) {
    return next({
      status: SC.BAD_REQUEST,
      code: Error.UnknownError,
      message: 'unexpected error occured',
      extra: ex,
    });
  }
};

module.exports = {
  UpdateUserInfo,
  GetInfoHandler,
  UserDetailHandler,
  SearchHandler,
};
