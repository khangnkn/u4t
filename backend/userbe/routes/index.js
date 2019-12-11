const express = require('express');

const router = express.Router();
const publicRouter = require('./public');
const privateRouter = require('./private');
const authMdw = require('../middlewares/bearer-auth');
const { environment } = require('../utils/config');

/* GET home page. */
router.use('/', publicRouter);
router.use('/p', authMdw, privateRouter);
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(err.status || 500);
  const resp = {};

  resp.code = err.code || -1;
  resp.message = err.message || 'unexpected error occurred';

  if (err.data) {
    resp.data = err.data;
  }
  if (environment !== 'development') {
    return res.json(resp);
  }
  if (err.extra) {
    resp.extra = err.extra;
  }
  return res.json(resp);
});


module.exports = router;
