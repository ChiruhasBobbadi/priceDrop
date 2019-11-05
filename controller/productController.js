const product = require('../model/products');
const mongoose = require('mongoose');

const user = require('../model/user');

exports.addProduct = (req,res,next)=>{
    // adding product..

    const prod = "";
    const userID = mongoose.Types.ObjectId(prod.userId);
    let prodId;
    user.findOne(userID).then(result=>{

        if(result){
            prodId = result._id;

            return user.findById(userID);
        }

    }).then(user=>{
       if(user){
           let length = user.products.length;

           if(length===3){
               // not possible to add more since limit is only 3
           }
           else{
               user.products.push(prodId);
               return user.save()
           }
       }

    }).then(result=>{
        if(result)
        {
            // send sucess response.
        }
    }).catch(err=>{

    })


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


