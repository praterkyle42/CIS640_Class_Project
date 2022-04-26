var express = require('express');
var router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middleware/auth');

router.get('/',authMiddleware.ensureAuthenticated, patientController.get_patient);

router.get('/addNewPatient',authMiddleware.ensureAuthenticated, patientController.get_addNewPatient);

router.post('/create',authMiddleware.ensureAuthenticated, patientController.post_newPatient);

router.get('/update',authMiddleware.ensureAuthenticated, patientController.get_updatePatient);
router.post('/update',authMiddleware.ensureAuthenticated, patientController.post_updatePatient);

router.get('/delete',authMiddleware.ensureAuthenticated, patientController.get_deletePatient);

module.exports = router;