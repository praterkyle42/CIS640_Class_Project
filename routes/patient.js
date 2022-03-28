var express = require('express');
var router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.get_patient);

module.exports = router;