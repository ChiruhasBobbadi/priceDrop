const bcrypt = require('bcrypt');
const User = require('../model/user');
const code = require('../util/responseCodes');
const node_mailer = require('nodemailer');
const sgmail = require('@sendgrid/mail');
var mongoose = require('mongoose');


exports.postLogin = (req, res, next) => {

    //TODO
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    // fetch data from db.
    let _id = "";
    User.findOne({email: email}).then(result => {

        console.log(result);
        if (result) {

            _id = result._id;
            return bcrypt.compare(password, result.password)
        } else {
            console.log("inside 404");
            res.status(404).json(JSON.parse(code.loginFailedResponse(404, "User don't exist")))
        }

    }).then(result => {
        console.log(result);
        if (result) {
            // password matches
            console.log("inside successs");
            obj = {
                "status_code": "200",
                "id": _id,
                "status": "login success",
                "error_message": ""
            };


            res.status(200).json(obj);

        } else {
            // passwords dont match.

            res.status(401).json(JSON.parse(code.loginFailedResponse(401, "Password's Don't match")))

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


    User.findOne({email: email}).then(user=>{
        if(!user) {
           return bcrypt.hash(password, 12)
        }
        else{
            return res.status(409).json(JSON.parse(code.loginFailedResponse(409, "User Exists")));

        }
    }).then(hash => {


        const us = new User({
            email: email,
            password: hash,
            name: name,
            phone: phone
        });

        return us.save();
    }).then(result => {

        if(result){


            const id=result._id;

            res.status(200).json(code.signupSucessResponse(id));
        }

        else{

            throw  new Error("Saving failed");
        }

    }).catch(err => {
        // send 404 error.
        /*console.log(err);*/
        //res.status(400).json(JSON.parse(code.error));
    });

};

exports.deleteUser=(req,res,next)=>{

    console.log("in delete");
    var id = mongoose.Types.ObjectId(req.query.id);


    User.findByIdAndDelete(id).then(result=>{

        if(result){
            res.status(200).json({
                "status":200
            });
        }else{
            res.status(404).json({
                "status":404
            });
        }
    }).catch(err=>{
        console.log(err);
    })
};



