const mongoose=require('mongoose')


//----------------------comments schema-------------
//step:1 create schema for comments
const commentSchema=new mongoose.Schema({
    body:{type:String,required:true},
    post:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}
},{
    versionKey:false,
    timestamps:true,
})

//step2: connect the schema to comment collection
const Comment=mongoose.model("comment",commentSchema)
module.exports=Comment