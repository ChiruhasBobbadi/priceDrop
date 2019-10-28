const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        required:true,
        type:String
    },
    url:{
        required:true,
        type:String
    },
    curr_price:{
        required:true,
        type:Number
    }, tar_price:{
        required:true,
        type:Number
    },
    img_url:{
        required:true,
        type:String
    },
    refreshTime:{
        required:true,
        type:String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    flashSale:{
        type:Boolean,
        required:true
    }
});


module.exports = mongoose.model('product', productSchema);

