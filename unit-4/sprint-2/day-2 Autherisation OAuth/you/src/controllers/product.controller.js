const express=require('express');

const router=express();

const Product=require("../models/product.model")

const authenticate=require("../middlewares/authenticate")

const authorize=require("../middlewares/authorize")



router.get("",authenticate,authorize(["seller","admin"]),async(req,res)=>{
    try{
let product=await Product.find().lean().exec();

let user=req.user

return res.status(200).send({product,user})

    }catch(err){
    return    res.status(400).send('err14:',err.message)
    }
})

router.patch("/update/:id",authenticate,authorize(["seller","admin"]),async (req,res)=>{
  
    console.log("hello");
    try{
const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

return res.status(200).send({product})
    }catch(err){
        console.log("err:28",err.message);
    }
})

router.delete("/delete/:id",authenticate,authorize(["seller","admin"]),async (req,res)=>{
    try{
const product=await Product.findByIdAndRemove(req.params.id);

return res.status(200).send(product)
    }catch(err){
        console.log("err:36",err.message);
    }
})

module.exports=router