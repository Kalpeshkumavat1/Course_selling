const mongooseConnect=require('../db/mongoconnect')
const mongoose=require('mongoose')
const Schema=mongoose.Schema;
mongooseConnect();

const userSchema=Schema({
    email:{type:String, unique:true,required:true},
    password:{type:String,required:true},
    firstName:{type:String, unique:true,required:true},
})

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;