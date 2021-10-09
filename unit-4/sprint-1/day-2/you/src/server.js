const app=require("./index");
const connect=require("./configs/db")

const userController=require("./controllers/user.controller");
app.use("/users",userController)

app.listen(4000,async (req,res)=>{
await connect();
    console.log("listening to port 4000");
})