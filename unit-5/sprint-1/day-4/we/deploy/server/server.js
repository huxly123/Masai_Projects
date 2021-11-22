const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
    return res.send("hello heroku")
});



app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err);
    console.log("server running on port",port);
})