const express=require('express');

const jwt=require("jsonwebtoken")

const router=express.Router()

const {body,validationResult }=require('express-validator')

const User=require("../models/user.model")

newToken=(user)=>{
   return jwt.sign({user},"masaischool")
}

router.post("",
body("email","not an email").notEmpty(),
body("password").notEmpty().withMessage("pass is empty").custom(value=>{
    if(value <4||value>8){
        throw new Error ("password limit not satisfied")
    }
    else{
        return true
    }
}),
async(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        let finalerror=null;
        finalerror=errors.array().map(error=>{
            return{
                params:error.param,
                msg:error.msg
            }
        })
        return res.status(400).send({errors:finalerror})
    }


    try{
let user =await User.findOne({email:req.body.email});

if(!user) ("user doesnt exist");

let match=user.checkPassword(req.body.password);

if(!match) return res.status(400).send({message:"please check password"})

const token=newToken(user)

return res.status(200).send({user,token})
    }
    catch(err){
    console.log("err:",err.message)
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});    }
})


module.exports=router