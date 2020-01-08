const cloudinary = require('cloudinary').v2;
const SC = require('http-status-codes');
const { User } = require('../models');
const Error = require('../utils/error');
const UserRepository = require('../repository/user.repository');


const parseUser = (data) => {
  const result = {
    email: data.email,
    fullname: data.fullname,
    address: data.address,
    gender: data.sex,
    phone: data.phone,
    city: data.city,
    role: data.role,
  };
  if (data.role === 1) {
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

const UpdateUserInfo = async (req, res, next) => {
  const { body } = req;
  const info = JSON.parse(body.infor);
  console.log('Body ', body);
  const user = parseUser(info);
  if (req.file) {
    const avatar = req.file.path;
    const ret = await cloudinary.uploader.upload(avatar, { use_filename: false });
    user.avatar = ret.url;
  }
  const id = res.locals.user._id;
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
