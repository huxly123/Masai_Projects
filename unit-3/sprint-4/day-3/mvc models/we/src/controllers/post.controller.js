const express=require('express')

const router=express.Router();

const Post=require("../models/post.model")

const Comment=require("../models/comment.model")

const crudController=require("../controllers/crudController")

// ---------------------CRED API for post -----------------------
//1  creating a post
router.post("",crudController.post(Post))
    
    //2  getting all post
    router.get("",crudController.get(Post))
    
    //get single post
    
    router.get("/:id",crudController.getOne(Post))
    
    //update a single post
    router.patch("/:id",crudController.updateOne(Post))
    //delete a single post
    router.delete("/:id",crudController.deletee(Post))
    //comment in posts
    router.get("/:id/comments",async (req,res)=>{
        const comments=await Comment.find({post:req.params.id}).lean().exec();
        const post=await Post.findById(req.params.id).lean().exec();
        return res.status(200).send({comments,post});
    })

    module.exports=router