const jwt=require('jsonwebtoken');
const secret_key="values";
function token(){
    const token=jwt.sign({id:ObjectId},secret_key,{expiresIn:"1h"});
    return token;
}
module.exports=token;
