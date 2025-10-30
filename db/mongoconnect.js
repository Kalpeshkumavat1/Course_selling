const mongoose=require('mongoose')
require('dotenv').config()
async function mongooseConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo is connected!")
    }
    catch(error){
        console.log("unable to connect mongo!")
        process.exit(1);
    }
}
module.exports=mongooseConnect;