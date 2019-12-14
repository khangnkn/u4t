const SC = require('http-status-codes');
const { User } = require('../models');
const Error = require('../utils/error');

const parseUser = (body) => {
  const result = {
    email: body.infor.email,
    fullname: body.infor.hoTen,
    address: body.infor.diaChi,
    city: body.infor.ttp,
    role: body.infor.role,
  };

  if (body.infor.role === 1) {
    const metadata = {
      level: body.data.trinhDo,
      skills: body.data.kyNang,
      intro: body.data.tongQuan,
      price: body.data.giaTien,
    };
    result.data = metadata;
  }

  return result;
};

const UpdateUserInfo = (req, res, next) => {
  const { body } = req;
  const avatar = req.file;
  const user = parseUser(body);
  user.avatar = avatar;
  User.findByIdAndUpdate(body.id, user, (err, foundUser) => {
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

module.exports = {
  UpdateUserInfo,
};
