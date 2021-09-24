
const mongoose=require('mongoose')

//----------------------post schema---------------------------

//step1:create schema for post
const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    tags:[{type:mongoose.Schema.Types.ObjectId,ref:"tag",required:true}]
},{
    versionKey:false,
    timestamps:true,
})

//step2: connect the schema to post collection
const Post=mongoose.model("post",postSchema)//posts
module.exports=Post
