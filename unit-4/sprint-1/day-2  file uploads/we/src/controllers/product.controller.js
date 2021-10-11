const express=require('express');
const Product=require("../models/product.model")
const router=express.Router();
const upload=require("../middlewares/file-upload")

router.get("/new",(req,res)=>{
    return res.render("products/new")
})

router.post("/single",upload.single("productImages"),async (req,res)=>{
 //   console.log(req.file);
    const product=await Product.create({
        title:req.body.title,
        price:req.body.price,
        img_urls:req.file.path
    })

    res.status(200).send(product)
})

router.post("/multiple",upload.any("productImages"),async (req,res)=>{
  //  console.log(req.files);
   const filePaths=req.files.map(file=>file.path)
   const product=await Product.create({
    title:req.body.title,
    price:req.body.price,
    img_urls:filePaths
})
   
   return res.status(200).send(product)
})

module.exports=router