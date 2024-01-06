const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:true
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    salary: {
        type: String
      }
})
module.exports = mongoose.model('employee',Employee);