const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs')
const userSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:1},
    email:{type:String,required:true,minlength:1},
    password:{type:String,required:true,minlength:6},
    profile_url:{type:String,required:true,minlength:1},
    roles:[{type:String,required:true}]
},{
    versionKey:false,
    timestamps:true
})


userSchema.pre("save", function(next) {
    if(! this.isModified("password")) return next();

    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash

    return next();
})

userSchema.methods.checkPassword = function(password) {
    const match = bcryptjs.compareSync(password, this.password);

    return match;
}

const User=mongoose.model("user",userSchema);

module.exports=User