var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authmiddleware = require('../middleware/auth');


/* GET home page. */
router.get('/',authmiddleware.ensureAuthenticated, dashboardController.get_dashboard);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Lab Management Platform' });
});

module.exports = router;
