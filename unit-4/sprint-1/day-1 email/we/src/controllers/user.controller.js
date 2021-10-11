const express=require('express');
const router=express.Router();
const User=require("../models/user.model")
const sendMail=require("../utils/sendmail")
const path=require('path')
router.get("",async function(req,res){
    const page=req.query.page ||1;
    const size=req.query.size ||3;
const totalUserCount=await User.find().countDocuments().lean().exec();
const totalPages=Math.ceil(totalUserCount/size);
    const offset=(page-1)*size
    const users=await User.find().skip(offset).limit(size).lean().exec();

sendMail({
  from:"acb@abc.com",
  to:"wewrf@wfd.com",
  subject:"Message title",
  text:"plain text",
  html:path.join(__dirname,"../html/name.html"),
  path:path.join(__dirname,"../file/name.txt")
})
  
    return  res.send({users,totalPages})
})


module.exports=router