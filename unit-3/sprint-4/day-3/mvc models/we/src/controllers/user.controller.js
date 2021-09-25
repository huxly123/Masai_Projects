const express=require('express')

const router=express.Router();

const User=require("../models/user.model");

const Post=require("../models/post.model")

const crudController=require("../controllers/crudController")

//--------------CRED api for user----------------



router.post("",crudController.post(User))
 
//get all users
router.get("",crudController.get(User))

router.patch("/:id",crudController.updateOne(User))

router.delete("/:id",crudController.deletee(User))

//to get single user
router.get("/:id",crudController.getOne(User))

//get all post of a user
router.get("/:id/posts",async (req,res)=>{
    const post=await Post.find({author:req.params.id}).lean().exec();
    const author=await User.findById(req.params.id).lean().exec();
    return res.status(200).send({post,author})
})

module.exports=router