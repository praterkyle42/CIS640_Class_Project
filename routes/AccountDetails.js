var express = require('express');
var router = express.Router();
const AccountDetailsController = require('../controllers/accountDetailsController');

router.get('/', AccountDetailsController.getAccountDetails);

router.get('/create', AccountDetailsController.get_addNewUser);
router.post('/create', AccountDetailsController.post_newUser);

router.get('/update', AccountDetailsController.get_updateUser);
router.post('/update', AccountDetailsController.post_updateUser);

router.get('/delete', AccountDetailsController.get_deleteUser);
module.exports = router;
