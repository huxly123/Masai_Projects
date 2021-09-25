const express=require('express');

const router=express.Router();

const Tag=require("../models/tag.model")

const crudController=require("../controllers/crudController")

// ---------------------CRED API for tag -----------------------
//1  creating a post
router.post("",crudController.post(Tag))
    
    //2  getting all post
    router.get("",crudController.get(Tag))
    
    //get single post
    
    router.get("/:id",)
    
    //update a single post
    router.patch("/:id",crudController.getOne(Tag))
    //delete a single post
    router.delete("/:id",crudController.deletee(Tag))


    module.exports=router;