const express=require('express');

const router=express.Router();

const User=require("../models/user.model")

router.post("/create",async (req,res)=>{
    const user=await User.create(req.body)
    res.status(200).send(user)

})

module.exports=router