const app=require("./index");

const connect=require("./configs/db");

app.listen(3241,async ()=>{
    await connect();
    console.log("listening to port 3241");
})