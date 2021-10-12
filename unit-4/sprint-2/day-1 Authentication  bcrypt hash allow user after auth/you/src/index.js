const express=require('express');


const app=express();

app.use(express.json());

const signupController=require("./controllers/auth.signupcontroller");

const signinController=require("./controllers/auth.signin.controller")

const postController=require("./controllers/post.controller")

app.use("/signup",signupController)

app.use("/signin",signinController)

app.use("/posts",postController)

module.exports=app