var express = require('express');
var router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.get_patient);

router.get('/addNewPatient', patientController.get_addNewPatient);

router.post('/create', patientController.post_newPatient);
module.exports = router;