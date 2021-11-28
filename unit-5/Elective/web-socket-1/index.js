const ws = require("ws");

// web socket server

const wss = new ws.WebSocketServer({ port: 8080 })

wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        console.log("received ",message);
    })
    ws.send("something")
})