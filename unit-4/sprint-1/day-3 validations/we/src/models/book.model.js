const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    pages:{type:Number,required:true},
    edition:{type:Number,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
})

Book=mongoose.model("book",bookSchema)

module.exports=Book