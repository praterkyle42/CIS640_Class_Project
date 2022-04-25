const Patient = require("../models/patientSchema");

exports.get_patient = function(req,res) {
    
    Patient.find({}, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
            res.render('Patient/index', {patients: data} );
        }

    })
}

exports.get_addNewPatient = function(req,res) {
    res.render('Patient/addNewPatient')
}

exports.post_newPatient = function(req,res) {
    let enabled = false; 
    if(req.body.enabled == 'on') {
        enabled = true;
    }
    
    let newPatient = new Patient({
        CreatorId: req.body.creatorID, 
        CreatorName: req.body.creatorName, 
        FirstName: req.body.firstName,
        LastName: req.body.lastName, 
        Birthdate: req.body.birthDate,
        Zipcode: req.body.zipCode, 
        State: req.body.inputState, 
        PhoneNumber: req.body.phone, 
        CreateDate: req.body.birthDate,
        InsuranceType: req.body.insurance, 
        TestType: req.body.testType, 
        DoctorService: req.body.service, 
        LabName: req.body.lab, 
        SampleStatus: req.body.status
    })

    newPatient.save(function(err) {
        if(err) {
            console.log(err)
        }
        else {
            console.log("Patient Saved!")
        }
    })

    res.render('Patient/thankyou')
}

exports.get_updatePatient = function(req, res) {
    Patient.findOne({ _id: req.query.id }, function (err, patient) {
        if (err) {
            console.log(err);
        } else {
            console.log(patient);
            res.render('Patient/updatePatient', { data: patient });
        }
    });
}

exports.post_updatePatient = function (req, res) {

    const updateData = {
        CreatorId: req.body.creatorID, 
        CreatorName: req.body.creatorName, 
        FirstName: req.body.firstName,
        LastName: req.body.lastName, 
        Birthdate: req.body.birthDate,
        Zipcode: req.body.zipCode, 
        State: req.body.inputState, 
        PhoneNumber: req.body.phone, 
        CreateDate: req.body.createDate,
        InsuranceType: req.body.insurance, 
        TestType: req.body.testType, 
        DoctorService: req.body.service, 
        LabName: req.body.lab, 
        SampleStatus: req.body.status
    };

    Patient.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/patient');
        }
        });
    }

    exports.get_deletePatient = function (req, res) {
        Patient.findOneAndDelete({ _id: req.query.id }, function (err) {
            if (err) {
                // handle error
                console.log(err);
            } else {
                res.redirect('/patient');
            }
        })
    }
