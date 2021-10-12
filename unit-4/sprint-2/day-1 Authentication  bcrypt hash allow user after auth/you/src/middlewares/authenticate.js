const jwt=require('jsonwebtoken')

function verifyToken (token){
    return new Promise(function(resolve,reject){
        jwt.verify(token,"masaischool",function(err,user){
if(err) return reject(err);

return resolve(user)
        })
    })
}

async function authenticate (req,res,next){
    const bearerToken=req.headers.authorization;
console.log(bearerToken);
    if(!bearerToken||!bearerToken.startsWith('Bearer ')) return res.status(400).send("provide bear token");

    const token=bearerToken.split(" ")[1];

    try{
const {user}=await verifyToken(token)
console.log(user);
req.user=user;
return next()
    }
    catch(err){
return res.status(400).send("please provide bearer")
    }
}

module.exports=authenticate