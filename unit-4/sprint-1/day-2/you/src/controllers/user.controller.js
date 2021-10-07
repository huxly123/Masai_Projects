const express=require('express');

const router=express.Router();

const User=require("../models/user.model")

router.post("/create",async (req,res)=>{
    const user=User.create()
})