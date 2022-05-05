let User = require('../models/userSchema');

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
    
    var newUser = new User();
    
    newUser.firstName = req.body.firstName,
    newUser.lastName = req.body.lastName, 
    newUser.email = req.body.email, 
    newUser.password = newUser.generateHash(req.body.password), 
    newUser.role = req.body.role
    

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
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email, 
        role: req.body.role
    };
    if(req.body.password) {
        let tempUser = new User()
        updateData.password = tempUser.generateHash(req.body.password)
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
exports.get_Admin = function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render('AccountDetails/admin', { users: data });
        }

    })
}