const connect = require("./configs/db");
const app=require("./index")

app.listen(4568,async ()=>{
    await connect();

    console.log("listening to port 4568");
})