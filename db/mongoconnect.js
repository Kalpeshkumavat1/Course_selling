const mongoose=require('mongoose')
async function mongooseConnect(){
    try{
        await mongoose.connect("mongodb+srv://kalpesh2772:Kalpesh123@cluster0.2ikdm.mongodb.net/CourseSellingApp")
        console.log("mongo is connected!")
    }
    catch(error){
        console.log("unable to connect mongo!")
        process.exit(1);
    }
}
module.exports=mongooseConnect;