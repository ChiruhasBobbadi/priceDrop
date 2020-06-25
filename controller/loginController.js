const bcrypt = require('bcrypt');
const user = require('../model/user');

exports.postLogin = (req, res, next) => {

    //TODO
    const email = "";
    const password = "";
    // fetch data from db.

    user.findOne({email: email}).then(res => {

        if (res) {
            return bcrypt.compare(password, hash)
        }

    }).then(res => {
        if (res) {
            // password matches
        } else {
            // passwords dont match.
        }
    })
        .catch(err => {
            // return 404
        });


};

exports.postsignUp = (req, res, next) => {
    // create a new user.

    console.log("hello");

    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;
    let name = req.body.name;



    bcrypt.hash(password, 12).then(hash => {
        password = hash;

        return user.findOne({email: email});


    }).then(us => {

        if (us) {
            // send response stating a email id is already present.
        }

            return new user({
                email: email,
                password: password,
                name: name,
                phone: phone
            }).save();

    }).then(result => {

        res.json({'msg': 'success'}).statusCode = 200;

        // send appropriate responses.
    }).catch(err => {
        console.log(err);
        res.json({'msg': 'failed'}).statusCode = 404;
    });


};