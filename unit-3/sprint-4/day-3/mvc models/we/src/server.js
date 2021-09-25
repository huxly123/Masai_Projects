const express=require('express');
const app=express();

app.use(express.json())

const connect=require('./configs/db.js')



const userController=require("./controllers/user.controller")

const postController=require("./controllers/post.controller")

const commentController=require("./controllers/comment.controller");

const tagController=require("./controllers/tag.controller");

app.use("/users",userController);
app.use("/posts",postController);
app.use("/comments",commentController);
app.use("/tags",tagController);


app.listen(5554,async function(){
await connect();
console.log("listening");
})