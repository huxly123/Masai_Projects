const jwt =require('jsonwebtoken');

const path=require('path')

require('dotenv').config({path:path.resolve(__dirname,"../.env")})

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, process.env.JWT_SECRETKEY, function(err, user) {
            if(err) return reject(err);

            return resolve(user)
        })
    })
}

  async function authenticate(req,res,next){
      const bearerToken=req.headers.authenticate;

      if(!bearerToken|| !bearerToken.startsWith('Bearer '))return res.status(400).send("provide bearer token");

const token=bearerToken.split(" ")[1];

try{
let {user}=await verifyToken(token);

req.user=user

return next();

}catch(err){
    return res.status(400).send({message: "Please provide a valid bearer token"});

}
  }

module.exports=authenticate