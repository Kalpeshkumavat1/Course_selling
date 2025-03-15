const mongooseConnect=require('../db/mongoconnect')
const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;
mongooseConnect();
const purchaseSchema=new Schema({
    userid:{type:ObjectId,ref:"user"},
    courses:[Number]
})
const purchaseModel=mongoose.model("purchase",purchaseSchema);
module.exports=purchaseModel;