const Post =require("../models/post.model");

const express=require('express');

const router=express.Router();

const authenticate=require("../middlewares/authenticate")

router.get("",authenticate,async (req,res)=>{
    try{
    const posts=await Post.find().lean().exec();
const user=req.user

return res.send({posts,user})
    }catch(err){
        console.log("err:",err.message);
    }
})


module.exports=router