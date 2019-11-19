var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ping', (req, res) => {
  res.send('pong')
})

module.exports = router;
