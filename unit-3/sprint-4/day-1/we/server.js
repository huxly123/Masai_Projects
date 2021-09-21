const express=require('express');
const app=express();
const mongoose=require('mongoose')
app.use(express.json())
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/mon")
}

//1.create schema


const userSchema=new mongoose.Schema({
id:{type:Number,required:true},
first_name:{type:String,required:true},
last_name:{type:String,required:false},
email:{type:String,required:true},
gender:{type:String,required:true},
})

//2.connect schema to collection


const User=mongoose.model("user",userSchema);
//--------------CRED api for user----------------

//post create a user
app.post("/users",async(req,res)=>{
    const user=await User.create(req.body);
    return res.status(201).send({user})
})
 
//get all users
app.get("/users",async (req,res)=>{
    const users=await User.find().sort({id:1}).lean().exec();   //use to sort lean used to convert mongoose obj to json obj
//exec is use for proper promise ,it confirms the conditions for finding sort or any other act is finished

    return res.status(200).send({users})
})

app.patch("/users/:id",async (req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send({user})
})

app.delete("/users/:id",async (req,res)=>{
    const users=await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({users});
})

//to get single user
app.get("/users/:id",async (req,res)=>{
    const user=await User.findById(req.params.id);
   return res.status(200).send(user)
})
app.listen(2333,async function(){
await connect();
console.log("listening");
})