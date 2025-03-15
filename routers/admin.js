const {Router}=require('express')
const adminRouter=Router();
const {adminModel}=require('../db/adminModel')
adminRouter.post("/signup",function (req,res){
    res.json({
        message:"you are signup!"
    })
})


adminRouter.post("/signin",function(res,res){
    res.json({
        message:"you are signin!"
    })
})

module.exports=adminRouter;