const express=require('express')
const {body,validationResult}=require('express-validator')
const User=require("../models/user.model");

const router=express.Router();

router.post('',
body('first_name',"first_name is empty").notEmpty(),
body('last_name',"last_name is empty").notEmpty(),
body('email',"email is invalid").isEmail(),
body('pincode').notEmpty().withMessage("empty pin").isLength({min:6,max:6}).withMessage("invalid length"),
body('age').notEmpty().withMessage("empty age").custom((value,{req})=>{
    if(value<1||value>100) throw new  Error("age is invalid")
return true
}),
body('gender').notEmpty().withMessage("empty gender").custom((value,{req})=>{
    if(value=="Male"|| value=="Female"||value=="Others") return true
    throw new Error ("gender is invalid")
}),
async (req,res)=>{
    console.log('hello');
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        let finalerror=null
        finalerror=errors.array().map(error=>{
            return {
                param:error.param,
                msg:error.msg
            }
        })
        return res.status(400).json({errors:finalerror})
    }
    try{
    const user=await User.create(req.body);
   return res.status(200).send(user)
    }catch(err){
        return res.status(400).send(err.message)
    }
}
)

module.exports=router