const bcrypt = require('bcrypt');
const User = require('../model/user');

exports.postLogin = (req, res, next) => {

    //TODO
    const email = req.body.email;
    const password = req.body.password;
    // fetch data from db.

    User.findOne({email: email}).then(result => {

        if (result) {

            return bcrypt.compare(password, result.password)
        }
        else{
            return res.status(404).json({"message":"email don't exist"})
        }

    }).then(result => {
        if (result) {
            // password matches
           return res.status(200).json({"message":"Sucess"})
        } else {
            // passwords dont match.
            return res.status(404).json({"message":"Don't match"})
        }
    })
        .catch(err => {

            // return 404
             res.status(404);
        });


};

exports.postsignUp = (req, res, next) => {
    // create a new user.


    //TODO
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;
    let name = req.body.name;


    bcrypt.hash(password, 12).then(hash => {
        password = hash;


        return User.findOne({email: email});


    }).then(user => {

        if (user) {
            // send response stating a email id is already present.

            return res.status(404).json({"message":"user exists"});
        }

            const us= new User({
                email: email,
                password: password,
                name: name,
                phone: phone
            });

        return us.save();

    }).then(result => {

      return res.status(200).json({"message":"sucess"});
    }).catch(err => {
        // send 404 error.

        res.status(404);
    });

};