const express=require('express');

const router=express.Router();

const Product=require("../models/product.model");

const authenticate=require("../middlewares/authenticate")

router.get("",authenticate,async (req,res)=>{
const products=await Product.find().lean().exec();
const user=req.user

return res.send({products,user})
})

module.exports=router