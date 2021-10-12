const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{type:String,required:true,minlength:1},
    body:{type:String,required:true,minlength:1},
    user:{type:mongoose.Schema.Types.ObjectId,required:true}
})

const Product=mongoose.model("post",postSchema);

module.exports=Product