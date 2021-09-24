const express=require('express');
const app=express();
const mongoose=require('mongoose')
app.use(express.json())

const connect=require('/configs/db.js')

const User=require("./models/user.model")

  const Post=require("./models/post.model")
const Comment=require("./models/comment.model")
const Tag=require("./models/tag.model")




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