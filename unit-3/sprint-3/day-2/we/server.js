//const { query } = require('express');
const express=require('express');
const users=require("./express.json")
const app=express();
//app.use(logger)
app.get("/",function(req,resp){
    resp.send("Welcome to homepage")
})
app.get("/users",function(req,res){
   
res.send(users)
})

app.use(express.json())
app.post("/users",validate({firstname:"required",lastname:"required",middlename:"optional"}),function(req,res){
    console.log(req.body);
    res.send(users)
})

function validate (data){
return function (req,res,next){
   let a= Object.keys(data)
   a.forEach(function(item){
        if(data[item]==="required"){
            if(!req.query[item]){
                res.send(`please add ${item} in the form`)
            }
        }
    })
    next();
}
}

function logger(req,res,next){
   console.log(req.query);
    console.log("loggerBefore");
    next();
}
function loggy(req,res,next){
    if(req.query.name=="huxly"){
        next()
    }else{
        res.send("i hate you");
    }
}
app.listen(2000,function(){
    console.log("listening");
})