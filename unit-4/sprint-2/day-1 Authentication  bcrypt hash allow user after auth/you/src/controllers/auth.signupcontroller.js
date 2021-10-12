const express=require('express');

const jwt=require("jsonwebtoken")

const router=express.Router()

const {body,validationResult }=require('express-validator')

const User=require("../models/user.model")

const newToken=(user)=>{
    return jwt.sign({user},"masaischool")
}

router.post("",body("name","name is empty").notEmpty(),
 body("email","email is invalid").isEmail(),
body("password","pass word is empty").notEmpty(),
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let finalerror=null;
        //  console.log(errors);
          finalerror=errors.array().map(error=>{
            return{
              param:error.param,
              msg:error.msg
            }
          })
        
          return res.status(400).json({ errors: finalerror})
    }
    let user
try{
user=await User.findOne({email:req.body.email});

if(user) return res.status(400).send("email already registered")

user=await User.create(req.body);

const token=newToken(user)

return res.status(200).send({user,token})

}catch(err){
    console.log("err:",err);
}


})

module.exports=router