// import { ObjectId } from "mongodb";
const ObjectId =require('mongoose').Schema.ObjectId
const {Router}=require('express')
const axios=require('axios')
const userRouter=Router();
const jwt=require('jsonwebtoken')
const userModel =require('../db/userModel')
const purchaseModel=require('../db/purchaseModel')
const bcrypt=require('bcryptjs')
const cookieparser=require('cookie-parser')
// const {ObjectId}=require('mongoose').Types;
const validation_signup=require('../validation/validsignup')
const validation_signin=require('../validation/validsignin')
const mongoose=require('mongoose')
require("dotenv").config({path:"dot.env"});
userRouter.use(cookieparser());
// function auth(req,res,next){
//     const token=req.cookies.token;
//     if(!token){
//         return res.status(400).json({
//             message:"token is not generated!"
//         })
//     }
//     jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
//         if(err){
//             return res.status(400).json({
//                 message:"token is invalid!"
//             })
//         }
//         req.user=user;
//         next();
//     })
// }

userRouter.post("/signup",validation_signup,async function (req,res){
    try{
        const email=req.body.email;
        const passWord=req.body.password;
        const firstName=req.body.firstName;
        if(!email || !passWord || !firstName){
            return res.status(404).json({message:"fields are not filled!"})
        }
        const existuser=await userModel.findOne({email});
        const existusername=await userModel.findOne({firstName});
        if(existuser){
            return res.status(409).json({message:"User is already exist!"})
        }
        if(existusername){
            return res.status(409).json({message:"UserName is already exist!"})
        }
        const hashedpassword=await bcrypt.hash(passWord,10);
        const newUser=new userModel({
            email:email,
            password:hashedpassword,
            firstName:firstName
        })
        await newUser.save();
        res.status(200).json({
            message:"you are signup!"
        })
    }
    catch(error){
        res.status(500).json({
            message:error + "unable to signup!"
        })
    }
})

userRouter.post("/signin",validation_signin,async function(req,res){
    try{
        const email=req.body.email;
        const password=req.body.password;
        if(!email || !password){
            return res.status(404).json({messge:"please filled required fields!"})
        }
        const userData=await userModel.findOne({email});
        if(!userData){
            return res.status(404).json({messge:"please signup!"})
        }
        console.log(userData.password);
        const isMatch=await bcrypt.compare(password,userData.password);
        if(!isMatch){
            return res.status(401).json({ message: "Wrong credentials!" });
        }
        const token=jwt.sign({id:userData.id} ,process.env.SECRET_KEY,{expiresIn:"1h"});
        if(!token){
            return res.status(404).json({messge:"Some Error for occuring token!"})
        }
        const firstName=await userData.firstName;
        // Updated cookie configuration that works in both dev and production
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true in production, false in development
            sameSite: "lax",
            // Remove the domain property entirely - it will default to the current domain
            path: '/',
            maxAge: 3600000
        })
        return res.status(201).json({
            firstname:firstName,
            message:"you are signin!"
        })
    }
    catch(error){
        return res.status(400).json("some error")
    }
})

function auth(req,res,next){
    try{
        const token = req.cookies.token || req.headers.token || req.headers.authorization?.split(" ")[1];
        console.log(token);
        if(!token){
            console.log("token is not generated!")
            return res.status(400).json({
                message:"token is not generated!"
            })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user=decoded;
        next();
    }   
    catch(err){
        console.log("token is not generated123!")
        res.json({
            message:"Error is occuring!"
        })
    }
}
userRouter.post('/logout',function(req,res){
    try{
        res.clearCookie('token',{path:'/'});
        res.status(200).json({
            message:"logout"
        })
    }
    catch(error){
        res.status(400).json({
            message:"Error in logout"
        })
    }
})
userRouter.post('/:username',auth,async(req,res)=>{
    try{
        const username=req.params.username;
        const userid=req.user;
        const userIdString = userid.id;  // Extract ID from object
        console.log("Extracted UserID:", userIdString);
        const ress=await userModel.findOne({firstName:username})
        if (!ress) {
            console.log("User not found or response is undefined!");
            return res.status(400).json({ message: "User not found!" });
        }
        if(ress._id.toString()==userIdString){
            return res.status(200).json({
                message:"success"
            })
        }
        else{
            return res.status(400).json({
                message:"failure"
            })
        }
    }
    catch(error){
        return res.status(400).json({
            message:"failure"
        })
    }

});
userRouter.get('/profile/:username',auth,async function(req,res){
    try{
        const username=req.params.username;
        const userData=await userModel.findOne({firstName:username})
        if(!userData){
            return res.status(404).json({messge:"please signup!"})
        }
        else{
            res.status(200).json({
                email:userData.email,
                message:"ok done!"
            })
        }
    }
    catch(error){
        return res.status(404).json({messge:"please signup!"})
    }
})
userRouter.get('/purchases/:username',auth,async function(req,res){
    try{
        const username=req.params.username;
        const userData=await userModel.findOne({firstName:username});
        const userid=userData._id;
        const purchaseData=await purchaseModel.findOne({userid:userid})
        if(purchaseData.courses.length!=0){
            return res.status(200).json({
                courses:purchaseData.courses
            })
        }
        else{
            return res.status(400).json({
                message:"No Content Here!"
            })  
        }
    }
    catch(error){
        return res.status(500).json({
            message:"error!"
        })
    }
})                               
module.exports=userRouter;                                                                                                                                      
