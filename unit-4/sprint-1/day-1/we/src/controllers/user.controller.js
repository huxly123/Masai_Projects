const express=require('express');
const nodemailer=require('nodemailer')
require("dotenv").config();
const {CURRENT_ENVIRONMENT,SMTP_USERNAME,SMTP_PASSWORD}=process.env
const router=express.Router();
const User=require("../models/user.model")

router.get("",async function(req,res){
    const page=req.query.page ||1;
    const size=req.query.size ||3;
const totalUserCount=await User.find().countDocuments().lean().exec();
const totalPages=Math.ceil(totalUserCount/size);
    const offset=(page-1)*size
    const users=await User.find().skip(offset).limit(size).lean().exec();
   
   var message={
     from:"acb@abc.com",
     to:"wewrf@wfd.com",
     subject:"Message title",
     text:"plain text",
     html:"<p>html version</p>"
   }
   
  const transporter=  nodemailer.createTransport({
      host:CURRENT_ENVIRONMENT=="development" ? "smtp.mailtrap.io":"",
      port:587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user:SMTP_USERNAME,
        pass:SMTP_PASSWORD,
      },
    });
 console.log("hello")
 transporter.sendMail(message, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Mail was sent successfully !');
    }


 })
 console.log(CURRENT_ENVIRONMENT,SMTP_USERNAME,SMTP_PASSWORD)
  
    return  res.send({users,totalPages})
})

module.exports=router