const Product = require('../model/products');
const mongoose = require('mongoose');

const user = require('../model/user');

exports.addProduct = (req, res, next) => {
    // adding product..


    const userID = mongoose.Types.ObjectId(req.body.userId);
    let product = req.body.product;
    // prodId;
    product.userId = userID;

    let prodId;
    new Product(product).save().then(result => {
        console.log(result);
        if (result) {
            prodId = result._id;

            return user.findOne(userID)
        } else {
            return res.status(404);
        }

    }).then(result => {

        if (result) {


            let length = result.products.length;

            if (length === 3) {
                // not possible to add more since limit is only 3
                res.status(404).json({"message": "limit exceded"})
            } else {
                result.products.push(prodId);
                return result.save()
            }


        } else {
            res.status(404).json({"message": "User not found"})
        }


    }).then(user => {
        if (user) {
            res.status(200).json({"messaage": "sucess"});
        } else {
            return res.status(404);
        }
    }).catch(err => {
        console.log(err);
        res.status(404);
    })

};

exports.getProducts = (req, res, next) => {
    // getting all products of the user.

    const userId = "";
    const id = mongoose.Types.ObjectId(userId);

    user.findById(id).populate('products').then(prods => {
        if (prods) {
            // send the response to the client.
        } else {

        }
    }).catch(err => {
        // 404 error
    })

};



