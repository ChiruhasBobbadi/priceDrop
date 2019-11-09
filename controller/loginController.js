const bcrypt = require('bcrypt');
const User = require('../model/user');
const code= require('../util/responseCodes');
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
             res.status(404).json(JSON.parse(code.loginFailedResponse(404,"User don't exist")))
        }

    }).then(result => {
        if (result) {
            // password matches
            res.status(200).json(JSON.parse(code.loginSucessResponse))

        } else {
            // passwords dont match.
              res.status(401).json(JSON.parse(code.loginFailedResponse(401,"Password's Don't match")))

        }
    })
        .catch(err => {

            // return 404
           // console.log(err);
            // res.status(400).json(JSON.parse(code.error));
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

            return res.status(409).json(JSON.parse(code.loginFailedResponse(409,"User Exists")));
        }

            const us= new User({
                email: email,
                password: password,
                name: name,
                phone: phone
            });

        return us.save();

    }).then(result => {

      return res.status(200).json(JSON.parse(code.signupSucessResponse));
    }).catch(err => {
        // send 404 error.

        res.status(400).json(JSON.parse(code.error));
    });

};