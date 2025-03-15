const {Router}=require('express')
const adminCourse=Router();
const {adminModel}=require('../db/adminModel')

adminCourse.post("/signup",function(res,res){
    res.json({
        message:"you are signup!"
    })
})
adminCourse.post("/signin",function(res,res){
    res.json({
        message:"you are signin!"
    })
})
adminCourse.post('/',function(req,res){
    res.json({
        message:"course is added by admin"
    })
})

adminCourse.put('/',function(req,res){
    res.json({
        message:"this course is deleted by admin"
    })
})

adminCourse.get('/bulk',function(req,res){
    res.json({
        message:"course is created by admin"
    })
})

module.exports=adminCourse;