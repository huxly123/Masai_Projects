const express=require('express');
const Gallery=require("../models/galley.model")
const upload=require("../middlewares/file-upload")

const router=express.Router();

router.post("multiple",upload.array("Images",5),async (req,res)=>{
    const filepath=req.files.map(file=>file.path)
    const gallery=await Gallery.create({
        pictures:filepath,
        user_id:req.body.user_id
    })
    return res.status(200).send(gallery)
    })

    module.exports=router