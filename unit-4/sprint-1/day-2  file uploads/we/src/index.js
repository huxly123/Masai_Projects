const express=require('express');

const app=express()
app.use(express.json())
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
const productController=require("./controllers/product.controller");
app.use("/products",productController)

module.exports=app