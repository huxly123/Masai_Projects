const express=require('express');

const nodemailer=require('nodemailer')
const router=express.Router();

const User=require("../models/user.model")

router.get("/",async function(req,res){
    const page=req.query.page ||1;
    const size=req.query.size ||3;
const totalUserCount=await User.find().countDocuments();
const totalPages=Math.ceil(totalUserCount/size);
    const offset=(page-1)*size
    const users=await User.find().skip(offset).limit(size).lean().exec();
  
    var message = {
        from: "huxly@gmail.com",
        to: "receiver@sender.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
      };

   const transporter= nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "5708ed2ddf4d7d",
          pass: "b46eb06ff2c10c",
        },
      });
  
  transporter.sendMail(message)

    return  res.send({users,totalPages})
})

module.exports=router