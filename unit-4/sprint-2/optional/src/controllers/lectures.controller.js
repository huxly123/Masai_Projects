const express=require('express');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

const Lecture=require("../models/lectures.model")



const router=express.Router();
//  --------------------------------------------






// -----------------------------

router.post("",authenticate,authorize(["instructors","admin"]),async (req,res)=>{
    try{
const lecture=await Lecture.create(req.body);

const user=req.user

return res.status(200).send({lecture,user})

    }catch(err){
        console.log("err18:".err.message);
    }
})

router.get("",async (req,res)=>{
    try{
    const lectures=await Lecture.find().lean().exec()

return res.status(200).send(lectures)
    }catch(err){
        console.log("err:28",err.message);
    }
})

router.get("/:id",async (req,res)=>{
    try{
    const lectures=await Lecture.findById(req.params.id).lean().exec()

return res.status(200).send(lectures)
    }catch(err){
        console.log("err:28",err.message);
    }
})

router.patch("/:id",authenticate,authorize(["instructors","admin"]),async (req,res)=>{
    try{
const lecture=await Lecture.findByIdAndUpdate(req.params.id,req.body,{new:true})

return res.status(200).send(lecture)
    }catch(err){
        console.log("err:46",err.message);
    }
})

router.delete("/:id",authenticate,authorize(["instructors","admin"]),async (req,res)=>{
    try{
const lecture=await Lecture.findByIdAndDelete(req.params.id).lean().exec();

return res.status(200).send(lecture)
    }catch(err){
        console.log("err:46",err.message);
    }
})

module.exports=router