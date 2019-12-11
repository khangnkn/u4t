const express = require('express');
const SC = require('http-status-codes');
const Error = require('../../utils/error');
const { City } = require('../../models');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  City.find((err, cities) => {
    if (err) {
      return next({
        status: SC.INTERNAL_SERVER_ERROR,
        code: Error.UnknownError,
        message: 'cannot find cities',
        extra: `${err}`,
      });
    }
    return next({
      status: SC.OK,
      code: Error.Success,
      message: 'success',
      data: cities,
    });
  });
});

module.exports = router;
