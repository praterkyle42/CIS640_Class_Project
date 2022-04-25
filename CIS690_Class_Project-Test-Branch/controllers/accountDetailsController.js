const axios = require('axios');
const User = require('../models/userSchema');

exports.getAccountDetails = function(req,res) {
    User.find({}, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
            res.render('AccountDetails/index', {users: data} );
        }

    })
}

exports.get_addNewUser = function(req,res) {
    res.render('AccountDetails/addUser');
}

exports.post_newUser = function(req,res) {
    let enabled = false; 
    if(req.body.enabled == 'on') {
        enabled = true;
    }
    
    let newUser = new User({
        FirstName: req.body.firstName,
        LastName: req.body.lastName, 
        Email: req.body.email, 
        Password: req.body.password, 
        Role: req.body.role
    })

    let temp = new User();
    newUser.password = newUser.generateHash(req.body.password);
    
    newUser.save(function(err) {
        if(err) {
            console.log(err)
        }
        else {
            console.log("Patient Saved!")
        }
    })

    res.render('AccountDetails/thankyou')
}

exports.get_updateUser = function(req,res) {
    User.findOne({ _id: req.query.id }, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.render('AccountDetails/updateUser', { data: user });
        }
    });

}

exports.post_updateUser = function (req, res) {

    const updateData = {
        FirstName: req.body.firstName,
        LastName: req.body.lastName, 
        Email: req.body.email, 
        Password: req.body.password, 
        Role: req.body.role
    };
    if (req.password) {
    updateData.password = temp.generateHash(req.body.password)
    }
    User.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/AccountDetails');
        }
        });
    }

exports.get_deleteUser = function (req, res) {
    User.findOneAndDelete({ _id: req.query.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/AccountDetails');
        }
    })
}