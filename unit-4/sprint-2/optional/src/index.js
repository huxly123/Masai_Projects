const express=require('express');

const User=require("./models/user.model")

const app=express();

app.use(express.json())

const upload=require("./file-upload/file-upload")


const {register,login}=require("./controllers/auth.controller");
app.get("/allusers",async (req,res)=>{
    try{
    const user=await User.find()

return res.status(200).send(user)
    }catch(err){
        console.log("err:28",err.message);
    }
})

app.post("/users",upload.single("productImages"),register)

app.post("/login",login)

const lectureController=require("./controllers/lectures.controller");
app.use("/lectures",lectureController)

module.exports=app