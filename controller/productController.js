const product = require('../model/products');
const mongoose = require('mongoose');
const Product = require('../model/products');
const User = require('../model/user');

exports.addProduct = async (req, res, next) => {
    // adding product..

    const url = req.body.url;
    let uid = req.body.uid;
    const tar_price = req.body.tar_price;
    const source=req.body.source;

    let product = {
        url:url,
        tar_price:tar_price,
        source:source,
        curr_price:req.body.curr_price,
        name:req.body.name};

         uid = mongoose.Types.ObjectId(uid);
    try {

        let user = await User.findById(uid);
        if(user){
            let length = user.products.length;

            if(length===3){
                // not possible to add more since limit is only 3
            }
            else{
                console.log(product);
                let p = await new Product(product).save();
                user.products.push({_id:p._id});
                await user.save()
            }
        }
        res.json({'msg': 'success'}).statusCode = 200;
    }
    catch (e) {
        console.log(e);
        res.json({'msg': 'failed'}).statusCode = 404;
    }




};

exports.getProducts = (req,res,next)=>{
    // getting all products of the user.

    const userId = "";
    const id = mongoose.Types.ObjectId(userId);

    user.findById(id).populate('products').then(prods=>{
        if(prods){
            // send the response to the client.
        }
        else{

        }
    }).catch(err=>{
        // 404 error
    })

};


exports.fetchCurrentPrice = (prod) => {

}


