const mongoose=require('mongoose')

const gallerySchema=new mongoose.Schema({
    pictures :{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
  
})

const Gallery=mongoose.model("gallery",gallerySchema)

module.exports=Gallery