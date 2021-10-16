const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const jwt=require('jsonwebtoken')

const User=require("../models/user.model")

const newToken=(user)=>{
   return jwt.sign({user},process.env.JWT_SECRETKEY )
}

const register=async function(req,res){
    let user;
try{
    user=await User.findOne({email:req.body.email}).lean().exec();

    if(user) return res.status(400).send("user already exist");

    user=await User.create(req.body)

    let token=newToken(user);

    return res.status(200).send({user,token})

}catch(err){
    console.log("err:25",err.message);
    return res.status(400).send("12: login error")
}
}

const login=async (req,res)=>{
    try{
    let user=await User.findOne({email:req.body.email});

    if(!user) return res.status(400).send("user doesnt exist");

    let match=user.checkPassword(req.body.password);

    if(!match) return res.status(400).send("password doent match")

    const token=newToken(user);

  //req.user=user

    return res.status(200).send({user,token})

    }
    catch(err){
       console.log("err:49",err.message);
    }
}

module.exports={register,login,newToken}