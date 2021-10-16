const nodemailer=require('nodemailer')
require("dotenv").config();
const {CURRENT_ENVIRONMENT,SMTP_USERNAME,SMTP_PASSWORD}=process.env
const transporter=  nodemailer.createTransport({
    host:CURRENT_ENVIRONMENT=="development" ? "smtp.mailtrap.io":"",
    port:587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user:SMTP_USERNAME,
      pass:SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
  }

  });
  console.log(CURRENT_ENVIRONMENT,SMTP_USERNAME,SMTP_PASSWORD);

  module.exports=transporter