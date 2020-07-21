const express = require("express");
const mongoose=require('mongoose')
const socketIo = require("socket.io");
const http = require("http");
function realTime(app,port,model) {
    let sensorChange = mongoose.model(model);
    const server = http.createServer(app);
    server.listen(port, "127.0.0.1")
    const io = socketIo(server);
    io.on("connection", (socket) => {
        console.log("in io")
        getApiAndEmit(socket)
        socket.on('disconnect', () => {
            io.emit('user disconnected');
          });
    });
    const getApiAndEmit = socket => {
        console.log("getApiAndEmit")
        sensorChange.watch().on("change", ()=>{
            socket.emit("FromAPI", true);
        })
    };
}

module.exports = { realTime };
