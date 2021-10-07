const express=require('express');
const users=require("./foo.json")
const app=express();
app.get("/",function(req,resp){
    resp.send("Welcome to homepage")
})
app.get("/users",function(req,res){
res.send(users)
})
app.listen(2000,function(){
    console.log("listening");
})