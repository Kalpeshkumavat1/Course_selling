const {z}=require('zod')
const signupSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    firstName:z.string()
});
const validation_signup=(req,res,next)=>{
    try{
        req.body=signupSchema.parse(req.body)
        next();
    }
    catch(error){
        res.status(400).json({
            message:"error in zod!"
        })
    }
}
module.exports=validation_signup;