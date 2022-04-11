var express = require('express');
var router = express.Router();
const AccountDetailsController = require('../controllers/accountDetailsController');

router.get('/', AccountDetailsController.getAccountDetails);

router.get('/create', AccountDetailsController.get_AddUser);
router.post('/create', AccountDetailsController.getAccountDetails);

module.exports = router;
