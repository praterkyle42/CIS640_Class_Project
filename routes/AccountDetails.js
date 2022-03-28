var express = require('express');
var router = express.Router();
const AccountDetailsController = require('../controllers/accountDetailsController');

router.get('/', AccountDetailsController.getAccountDetails);

module.exports = router;
