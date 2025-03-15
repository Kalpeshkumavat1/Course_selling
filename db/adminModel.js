const mongooseConnect=require('../db/mongoconnect')
const mongoose=require('mongoose')
const Schema=mongoose.Schema;
mongooseConnect();
const adminSchema=Schema({
    email:{type:String, unique:true,require:true},
    password:{type:String,require:true},
    firstName:String,
    lastName:String
})
const adminModel=mongoose.model("admin",adminSchema);
module.exports=adminModel;