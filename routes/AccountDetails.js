var express = require('express');
var router = express.Router();
const usersController = require('../controllers/AccountDetailsController');

router.get('/', AccountDetailsController.get_AccountDetails);

module.exports = router;
