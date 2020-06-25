const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email:{
        required:true,
        type: Schema.Types.String
    },
    password:{
        required:true,
        type: Schema.Types.String
    },
    name:{
        required:true,
        type: Schema.Types.String
    },
    phone:{
        required:true,
        type: Schema.Types.Number
    },
    products:[{
        _id: {type: Schema.Types.ObjectId, ref: 'product'}

    }]
});


module.exports = mongoose.model('User', userSchema);

