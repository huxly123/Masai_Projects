const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
    return res.send("hello heroku")
})

const port = process.env.PORT || 5000


app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log("server running on port",port);
})