exports.get_patient = function(req,res) {
    res.render('Patient/index');
}

exports.get_addNewPatient = function(req,res) {
    res.render('Patient/addNewPatient')
}

exports.post_newPatient = function(req,res) {
    res.render('Patient/addNewPatient')
    let patient = {
        creatorID: req.body.creatorID, 
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        birthday: req.body.birthday, 
        zipCode: req.body.zipCode, 
        state: req.body.state, 
        phone: req.body.phone, 
        createDate: req.body.createDate, 
        insuranceType: req.body.insuranceType, 
        testType: req.body.testType, 
        doctorService: req.body.doctorService, 
        lab: req.body.lab, 
        status: req.body.status
    
     }
     res.redirect('Patient/index')
}

let patient = {
    creatorID: req.body.creatorID, 
    firstName: req.body.firstName, 
    lastName: req.body.lastName, 
    birthday: req.body.birthday, 
    zipCode: req.body.zipCode, 
    state: req.body.state, 
    phone: req.body.phone, 
    createDate: req.body.createDate, 
    insuranceType: req.body.insuranceType, 
    testType: req.body.testType, 
    doctorService: req.body.doctorService, 
    lab: req.body.lab, 
    status: req.body.status

 }