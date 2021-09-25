const mongoose=require('mongoose')

//---------------------Tag schemaa-----------------------
//step:1  create schema for tags
const tagSchema=mongoose.Schema({
    name:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
})

//step2: connect the schema to tags collection
const Tag=mongoose.model("tag",tagSchema);
module.exports=Tag