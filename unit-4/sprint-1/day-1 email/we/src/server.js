const connect=require("./configs/db")
const app=require("./index")




app.listen(2312,async ()=>{
    await connect();
    console.log("listening to port 2312");
})