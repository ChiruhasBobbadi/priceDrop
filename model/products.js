const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        required:true,
        type:Schema.Types.String
    },
    url:{
        required:true,
        type:Schema.Types.String
    },
    source:{
        required:true,
        type:Schema.Types.String
    },
    curr_price:{
        required:true,
        type:Schema.Types.Number
    },actual_price:{
        //required:true,
        type:Schema.Types.Number
    }, tar_price:{
        required:true,
        type:Schema.Types.Number
    },
    img_url:{

        type:Schema.Types.String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    flashSale:{
        type:Schema.Types.Boolean,
        //required:true
    }
});


module.exports = mongoose.model('product', productSchema);

