const express=require("express");
const users=require("./samplebooks.json");
const app=express();
app.use(express.json())
app.get("/",function(req,res){
    res.send(users)
})
app.post("/books",function(req,res){
users.push(req.body)
   
    res.send(users)
})

app.listen(2010,function(){
    console.log("listening");
})