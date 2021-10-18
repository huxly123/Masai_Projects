const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    roll_no:{type:String,required:true,minlength:1},
    batch:{type:Number,required:true,minlength:1},
   user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Student=mongoose.model("student",studentSchema);

module.exports=Student