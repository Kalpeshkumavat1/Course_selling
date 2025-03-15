const express=require('express')
const authRouter=express.Router();
const jwt=require('jsonwebtoken')
require('dotenv').config();

authRouter.get('user',function (req,res){
    const token=req.cookies.token;
    if(!token){
        return res.status(400).json({
            message:"token is not generated!"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Store user ID securely (avoid using localStorage on the server)
        return res.status(200).json({
            message: "Token is valid!",
            user: decoded, // Send user info safely
        });
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token!",
            error: error.message,
        });
    }
})
module.exports=authRouter;