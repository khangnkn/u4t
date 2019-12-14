const express = require('express');
const multer = require('multer');
const SC = require('http-status-codes');
const Error = require('../../utils/error');
const { User } = require('../../models');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `/upload/${req.body.id}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});


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

router.post('/info', upload.single('avatar'), (req, res, next) => {
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
});

module.exports = router;
