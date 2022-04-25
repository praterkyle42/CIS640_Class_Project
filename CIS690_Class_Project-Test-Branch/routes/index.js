var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homecontroller');


/* GET home page. */
router.get('/', homeController.get_home);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Lab Management Platform' });
});

module.exports = router;
