const {z} =require('zod')
const singinSchema=z.object({
    email:z.string().email(),
    password:z.string().min(3)
})
const validation_signin=(req,res,next)=>{
    try{
        req.body=singinSchema.parse(req.body)
        next();
    }
    catch(error){
        res.status(400).json({message:"zod error in signin"})
    }
}
module.exports=validation_signin