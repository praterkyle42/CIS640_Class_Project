var express = require('express');
var router = express.Router();
const AccountDetailsController = require('../controllers/accountDetailsController');
const authMiddleware = require('../middleware/auth');

router.get('/',authMiddleware.ensureIsAdmin, AccountDetailsController.getAccountDetails);

router.get('/create',authMiddleware.ensureIsAdmin, AccountDetailsController.get_addNewUser);
router.post('/create',authMiddleware.ensureIsAdmin, AccountDetailsController.post_newUser);

router.get('/update',authMiddleware.ensureIsAdmin, AccountDetailsController.get_updateUser);
router.post('/update',authMiddleware.ensureIsAdmin, AccountDetailsController.post_updateUser);

router.get('/delete',authMiddleware.ensureIsAdmin, AccountDetailsController.get_deleteUser);
module.exports = router;
