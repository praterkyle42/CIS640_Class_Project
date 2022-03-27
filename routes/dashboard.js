const dashboardController = require('../controllers/dashboardController');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', dashboardController.get_dashboard);

module.exports = router;
