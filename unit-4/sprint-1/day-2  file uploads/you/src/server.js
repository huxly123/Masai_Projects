const app=require("./index");
const connect=require("./configs/db")

app.listen(4000,async (req,res)=>{
await connect();
    console.log("listening to port 4000");
})