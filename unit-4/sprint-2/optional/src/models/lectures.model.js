const mongoose=require('mongoose');

const lectureSchema=new mongoose.Schema({
    title:{type:String,required:true,minlength:1},
    batch:{type:Number,required:true,minlength:1},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
},{
    versionKey:false,
    timestamps:true
}
)

const Lecture=mongoose.model("lecture",lectureSchema);

module.exports=Lecture