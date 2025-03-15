const {Router}=require('express')
const courseRouter=Router();
const course_api=require("../Data/course_api")
const {courseModel}=require('../db/courseModel')
const userModel=require('../db/userModel');
const purchaseModel=require('../db/purchaseModel');
const stripe=require('stripe')("sk_test_51R1S6CFYhRWL2xPtVTdurKeBza8P92gkTgDW1wueVNtUfp0zNGW3bUQFhFIDRp2nNnmuwycb4XvkGTgHHuWSNwBv00TxRMSwh8")
courseRouter.get('/preview',function(req,res){
    const data=course_api();
    res.json(data)
})
courseRouter.get('/preview/:id',function(req,res){
    const id=req.params.id;
    console.log(id)
    const data=course_api();
    res.json(data.courses[id])
})
courseRouter.get('/preview/payment/:id',function(req,res){
    const id=req.params.id;
    console.log(id)
    const data=course_api();
    console.log("amount1"+data.courses[id].price * 100)
    res.json({
        amount: data.courses[id].price * 100, // Convert to cents for Stripe
        currency: data.courses[id].currency
    });

})

courseRouter.post('/preview/purchase',async function(req,res){
    const {amount,currency}=req.body;
    console.log("amount2"+amount)
    try{
        const paymentIntent=await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types:["card"],
        })
        res.status(200).json({clientSecret:paymentIntent.client_secret});
    }
    catch(error){
        res.status(400).send({ error: error.message });
    }
})

courseRouter.post("/purchase",async(req,res)=>{
    try{
        const {username,id}=req.body;
        console.log(username);
        console.log(id);
        const userData=await userModel.findOne({firstName:username});
        const userid=userData._id;
        console.log(userid)
        const purchaseData=await purchaseModel.findOne({userid:userid});
        if(purchaseData){
            if(!purchaseData.courses.includes(id)){
                purchaseData.courses.push(id);
                await purchaseData.save();
                return res.status(200).json({ message: "Course purchased successfully"});
            }
            else{
                return res.status(400).json({ message: "Course already purchased" });
            }
        }else{
            const purchase=await new purchaseModel({
                userid:userid,
                courses:[id]
            })
            await purchase.save();
            return res.status(201).json({ message: "Course purchased successfully", purchaseData });
        }
    }
    catch(error){
        console.error("Purchase error:", error);
        return res.status(500).json({ message: "Server error" });
    }


})
module.exports=courseRouter;