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
movie_name:{type:String,required:true},
movie_genre:{type:String,required:false},
production_year:{type:Number,required:true},
budget:{type:Number,required:true},
})

//2.connect schema to collection


const User=mongoose.model("web11",userSchema);
//--------------CRED api for user----------------

//post create a user
app.post("/movies",async(req,res)=>{
    const user=await User.create(req.body);
    return res.status(201).send({user})
})
 
//get all users
app.get("/movies",async (req,res)=>{
    const users=await User.find().sort({id:1}).lean().exec();   //use to sort lean used to convert mongoose obj to json obj
//exec is use for proper promise ,it confirms the conditions for finding sort or any other act is finished

    return res.status(200).send({users})
})

app.patch("/movies/:id",async (req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({user})
})

app.delete("/movies/:id",async (req,res)=>{
    const users=await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({users});
})

//to get single user
app.get("/movies/:id",async (req,res)=>{
    const user=await User.findById(req.params.id).lean().exec();
   return res.status(200).send(user)
})
app.listen(2335,async function(){
await connect();
console.log("listening");
})