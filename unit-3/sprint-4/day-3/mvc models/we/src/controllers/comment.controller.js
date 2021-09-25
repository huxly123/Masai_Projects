const express=require('express');

const router=express.Router();

const Comment=require("../models/comment.model");

const crudController=require("../controllers/crudController")

// ---------------------CRED API for comment -----------------------
//1  creating a post
router.post("",crudController.post(Comment))
    
    //2  getting all post
    router.get("",crudController.get(Comment))
    
    //get single post
    
    router.get("/:id",crudController.getOne(Comment))
    
    //update a single post
    router.patch("/:id",crudController.updateOne(Comment))
    //delete a single post
    router.delete("/:id",crudController.deletee(Comment))

    module.exports=router