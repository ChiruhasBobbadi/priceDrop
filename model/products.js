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
    source:{
        required:true,
        type:String
    },
    current_price:{
        required:true,
        type:String
    },actual_price:{
        required:true,
        type:String
    }
    , target_price:{
        required:true,
        type:String
    },
    image_url:{
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

