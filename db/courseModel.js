const mongooseConnect=require('../db/mongoconnect')
const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;
mongooseConnect();
const courseSchema=Schema({
    title:String,
    desc:String,
    price:Number,
    imgUrl:String,
    CreatorId:{type:ObjectId,ref:"admin"}
})

const courseModel=mongoose.model("course",courseSchema);
module.export=courseModel;
