const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema= mongoose.Schema;

let dataSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String},
    email:{type:String},
    mobileNo:{type:String},
    pass:{type:String},
    confirmPassword:{type:String},
    userType:{type: Number,default:2,enum:[1,2]},// 1- for admin,2- for user
    lastLogin:{type:Date},
    createdAt: Date,
    updatedAt: Date
})
dataSchema.plugin(timestamps,{index:true})
module.exports=mongoose.model('data',dataSchema);