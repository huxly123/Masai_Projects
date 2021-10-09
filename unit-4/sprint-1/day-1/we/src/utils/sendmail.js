const transporter=require('../configs/mail')
const path=require('path')
const fs=require('fs');

const html=fs.createReadStream(path.join(__dirname,"../html/name.html"));




module.exports=(({from,to,subject,text,path})=>{

var message={
    from:from,
    to:to,
    subject:subject,
    text:text,
    html:html,
    attachments:[{
        filename:"name.txt",
        path:path
    }]
  }
  
 

transporter.sendMail(message)

})