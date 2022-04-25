const dashboardController = require('../controllers/dashboardController');
var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/auth');
/* GET home page. */
router.get('/',authMiddleware.ensureAuthenticated, dashboardController.get_dashboard);

module.exports = router;
