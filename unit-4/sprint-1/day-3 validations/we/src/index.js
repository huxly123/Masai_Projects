const express=require('express');

const app=express();

app.use(express.json())

const bookController=require("./controllers/book.controller");
app.use("/books",bookController)

module.exports=app