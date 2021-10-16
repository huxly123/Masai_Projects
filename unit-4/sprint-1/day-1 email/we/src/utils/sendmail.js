const transporter=require('../configs/mail')
const path=require('path')
const fs=require('fs');

const html=fs.createReadStream(path.join(__dirname,"../html/name.html"));




module.exports=((message)=>{

var message={
    from:message.from,
    to:message.to,
    subject:message.subject,
    text:message.text,
    html:html,
    attachments:[{
        filename:"name.txt",
        path:message.path
    }]
  }
  
 

transporter.sendMail(message)

})