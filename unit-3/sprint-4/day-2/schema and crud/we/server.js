const express=require('express');
const app=express();
const mongoose=require('mongoose')
app.use(express.json())


const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/mongoose")
}
  



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

//--------------CRED api for user----------------



app.post("/users",async(req,res)=>{
    const user=await User.create(req.body);
    return res.status(201).send({user})
})
 
//get all users
app.get("/users",async (req,res)=>{
    const users=await User.find().sort({id:1}).lean().exec();   //use to sort lean used to convert mongoose obj to json obj
//exec is use for proper promise ,it confirms the conditions for finding sort or any other act is finished

    return res.status(200).send({users})
})

app.patch("/users/:id",async (req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send({user})
})

app.delete("/users/:id",async (req,res)=>{
    const users=await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({users});
})

//to get single user
app.get("/users/:id",async (req,res)=>{
    const user=await User.findById(req.params.id);
   return res.status(200).send({user})
})

//get all post of a user
app.get("/users/:id/posts",async (req,res)=>{
    const post=await Post.find({author:req.params.id}).lean().exec();
    const author=await User.findById(req.params.id).lean().exec();
    return res.status(200).send({post,author})
})


// ---------------------CRED API for post -----------------------
//1  creating a post
app.post("/posts",async(req,res)=>{
const post=await Post.create(req.body);
return res.status(200).send({post})
})

//2  getting all post
app.get("/posts",async (req,res)=>{
    const post=await Post.find().populate({path:"author",select:"first_name"}).populate("tags").lean().exec();
    return res.status(200).send({post})
})

//get single post

app.get("/posts/:id",async (req,res)=>{
    const post=await Post.findById(req.params.id)
    return res.status(200).send({post})
})

//update a single post
app.patch("/posts/:id",async (req,res)=>{
    const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({post})
})
//delete a single post
app.delete("/posts/:id",async (req,res)=>{
    const post=await Post.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({post})
})
//comment in posts
app.get("/posts/:id/comments",async (req,res)=>{
    const comments=await Comment.find({post:req.params.id}).lean().exec();
    const post=await Post.findById(req.params.id).lean().exec();
    return res.status(200).send({comments,post});
})
// ---------------------CRED API for comment -----------------------
//1  creating a post
app.post("/comments",async(req,res)=>{
    const comment=await Comment.create(req.body);
    return res.status(200).send({comment})
    })
    
    //2  getting all post
    app.get("/comments",async (req,res)=>{
        const comments=await Comment.find().lean().exec();
        return res.status(200).send({comments})
    })
    
    //get single post
    
    app.get("/comments/:id",async (req,res)=>{
        const comments=await Comment.findById(req.params.id)
        return res.status(200).send({comments})
    })
    
    //update a single post
    app.patch("/comments/:id",async (req,res)=>{
        const comments=await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({comments})
    })
    //delete a single post
    app.delete("/comments/:id",async (req,res)=>{
        const comments=await Comment.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({comments})
    })

// ---------------------CRED API for tag -----------------------
//1  creating a post
app.post("/tags",async(req,res)=>{
    const tags=await Tag.create(req.body);
    return res.status(200).send({tags})
    })
    
    //2  getting all post
    app.get("/tags",async (req,res)=>{
        const tags=await Tag.find();
        return res.status(200).send({tags})
    })
    
    //get single post
    
    app.get("/tags/:id",async (req,res)=>{
        const tags=await Tag.findById(req.params.id)
        return res.status(200).send({tags})
    })
    
    //update a single post
    app.patch("/tags/:id",async (req,res)=>{
        const tags=await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({tags})
    })
    //delete a single post
    app.delete("/tags/:id",async (req,res)=>{
        const tags=await Tag.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({tags})
    })

app.listen(5554,async function(){
await connect();
console.log("listening");
})