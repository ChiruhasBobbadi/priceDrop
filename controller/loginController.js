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

    //TODO
    let email = "";
    let password = "";
    let phone = "";
    let name = "";


    bcrypt.hash(password, 12).then(hash => {
        password = hash;

        return user.findOne({email: email});


    }).then(user => {

        if (user) {
            // send response stating a email id is already present.
        }

            return new user({
                email: email,
                password: password,
                name: name,
                phone: phone
            }).save();

    }).then(result => {
        console.log(result);
        // send appropriate responses.
    }).catch(err => {
        // send 404 error.
    });

};