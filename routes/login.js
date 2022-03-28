var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function (req, res,) {
  res.render('login');
});

module.exports = router;
