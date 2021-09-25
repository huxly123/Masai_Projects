const mongoose=require('mongoose')



  // --------------user schema-----------------------------
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

    module.exports=User