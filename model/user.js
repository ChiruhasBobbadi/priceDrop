const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:Number
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'products',
    }]
});


module.exports = mongoose.model('user', userSchema);

